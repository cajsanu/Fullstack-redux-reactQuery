import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAll, updateVote } from "../requests/anecdotes";
import { useContext } from "react"
import NotificationContext from "../contexts/NotificationContext"

const Anecdote = ({ anecdote, handleClick }) => {
  const divStyle = {
    border: "5px solid rgba(100, 100, 100)",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={divStyle}>
      <li>
        {anecdote.content}
        <div>has {anecdote.votes} votes </div>
      </li>
      <button onClick={handleClick}>vote</button>
    </div>
  );
};

const Anecdotes = () => {
  const [notification, dispatch] = useContext(NotificationContext)
  const queryClient = useQueryClient();
  const updateVoteMutation = useMutation({
    mutationFn: updateVote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAll,
  });

  if (result.isLoading) {
    return (
      <h1>I'm having problems connecting to the server, give me a moment...</h1>
    );
  }

  if (result.isError) {
    return <h1>Nope...</h1>;
  }

  const allAnecdotes = result.data;

  const vote = (anecdote) => {
    updateVoteMutation.mutate(anecdote);
    dispatch({type: "VOTE", payload: anecdote.content})
  };

  //   const orderedByVotes = anecdotes.sort((a, b) => {
  //     return b.votes - a.votes;
  //   });

  return (
    <div>
      {allAnecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote(anecdote)}
        />
      ))}
    </div>
  );
};

export default Anecdotes;
