import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (anecdote) => {
    const object = {content: anecdote, votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
};

const updateVote = async (anecdote, id) => {
  const updatedVote = {content: anecdote.content, votes: anecdote.votes+1}
  const response = await axios.put(`${baseUrl}/${id}`, updatedVote)
  return response.data
}

export default { getAll, createNew, updateVote };
