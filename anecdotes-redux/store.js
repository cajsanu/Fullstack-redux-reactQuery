import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./src/reducers/anecdoteReducer";
import filterReducer from "./src/reducers/filterReducer";
import notificationReducer from "./src/reducers/notificationReducer"

const combinedStore = configureStore({
  reducer: { anecdotes: anecdoteReducer, filter: filterReducer, notification: notificationReducer },
});

export default combinedStore