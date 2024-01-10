import axios from "axios";
// const api = axios.create({
//   baseURL: 'http://localhost:4200/game/',
//   headers: { "Content-Type": "application/json" },
// });


export default async function userFavoriteList(_id) {
  try {
    // const response = await api.get("/favoriteList/", `'?_id=${_id}'`);
    const response = await axios.get("https://freegamesitebackend.onrender.com/game/favoriteList/" + `?_id=${_id}`);
    console.log(response);
    console.log(123);
    return response;
    } catch (error) {
      console.log(error);
      return Promise.reject(error.response.data);

    }
  }