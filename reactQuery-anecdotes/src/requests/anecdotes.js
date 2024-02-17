import axios from "axios";

const baseUrl = "http://localhost:3000/anecdotes";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const createAnecdote = async (content) => {
  const obj = { content, votes: 0 };
  const response = await axios.post(baseUrl, obj);
  return response.data;
};

export const updateVote = async (anecdote) => {
  const updatedVote = { content: anecdote.content, votes: anecdote.votes + 1 };
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, updatedVote);
  return response.data;
};
