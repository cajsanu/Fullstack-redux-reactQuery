import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification, removeNotification } from "../reducers/notificationReducer";

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
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    console.log(anecdotes)
    const filteredAnecdotes = anecdotes.filter((an) =>
      an.content.toLowerCase().includes(filter)
    );
    return filteredAnecdotes;
  });
  const dispatch = useDispatch();
  const voteAndNotify = (anecdote) => {
    dispatch(vote(anecdote))
    dispatch(setNotification(`You voted for: ${anecdote.content}`))
    setTimeout(() => {dispatch(removeNotification(""))}, 5000)
  }
  const orderedByVotes = anecdotes.sort((a, b) => {
    return b.votes - a.votes;
  });
  return (
    <div>
      {orderedByVotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => voteAndNotify(anecdote)}
        />
      ))}
    </div>
  );
};

export default Anecdotes;
