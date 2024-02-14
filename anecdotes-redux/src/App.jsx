
import "./index.css"
import "./App.css"
import Anecdotes from './components/Anecdotes'
import AnecdoteForm from "./components/AnecdoteForm"

const App = () => {

  return (
    <div>
      <h1>Anecdotes</h1>
      <Anecdotes/>
      <AnecdoteForm/>
    </div>
  )
}

export default App