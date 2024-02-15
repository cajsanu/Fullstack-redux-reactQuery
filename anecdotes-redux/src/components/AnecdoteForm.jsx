import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification, removeNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = async () => {
  const dispatch = useDispatch();

  const addNew = (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch(createAnecdote(newAnecdote));
    dispatch(setNotification(`Added ${anecdote} to the list`))
    setTimeout(() => {dispatch(removeNotification(""))}, 5000)
  };
  
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
