import "./index.css";
import "./App.css";
import { useEffect } from "react";
import Anecdotes from "./components/Anecdotes";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import  anecdoteService  from "./services/anecdotes";
import { setAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <div>
      <h1>Anecdotes</h1>
      <Filter />
      <Notification />
      <Anecdotes />
      <AnecdoteForm />
    </div>
  );
};

export default App;
