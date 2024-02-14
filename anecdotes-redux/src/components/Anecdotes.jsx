import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  const divStyle = {
    border: "5px solid rgba(100, 100, 100)",
    padding: "10px",
    margin: "10px"
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
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();
  const orderedByVotes = anecdotes.sort((a, b) => {
    return b.votes - a.votes
  })
  return (
    <div>
      {orderedByVotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(vote(anecdote.id))}
        />
      ))}
    </div>
  );
};

export default Anecdotes;
