import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  const ratings = useSelector(state => state)
  return (
    <div>
      <button onClick={good => dispatch({type: "GOOD"})}>good</button> 
      <button onClick={ok => dispatch({type: "OK"})}>ok</button> 
      <button onClick={bad => dispatch({type: "BAD"})}>bad</button>
      <button onClick={zero => dispatch({type: "ZERO"})}>reset stats</button>
      <div>good {ratings.good}</div>
      <div>ok {ratings.ok}</div>
      <div>bad {ratings.bad}</div>
    </div>
  )
}


export default App
