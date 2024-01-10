import axios from "axios";
const api = axios.create({
  baseURL: 'https://freegamesitebackend.onrender.com/game/',
  headers: { "Content-Type": "application/json" },
});

export default async function removeFromFavoriteList({_id, gameId}) {
    try {
      const response = await api.post("/removeFromList", {_id, gameId});
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error)
      return Promise.reject(error.response.data);

    }
  }