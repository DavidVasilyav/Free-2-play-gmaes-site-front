import axios from "axios";
const api = axios.create({
  baseURL: 'https://freegamesitebackend.onrender.com/game/',
  headers: { "Content-Type": "application/json" },
});

export async function addGameToFavorite(_id, gameInfo) {
  try {
      const response = await api.post("/addGame",{_id, gameInfo});
      return alert(`${gameInfo.gameTitle} added to your list`);
    } catch (error) {
      alert(`${gameInfo.gameTitle} is in your list`)
      console.log(error);
    }
  }