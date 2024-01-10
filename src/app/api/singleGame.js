const axios = require('axios');

export default async function getSingleGameById(id) {
const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: {id: id},
  headers: {
    'X-RapidAPI-Key': 'ee6494e656msh6a21c91440f3517p1f61bejsnf8302729b4e0',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

    try {
        const response = await axios.request(options);
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}