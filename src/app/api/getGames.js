const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': '82323f1493mshf628981ef3cd51cp168617jsn15baaefcf067',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default async function getGames() {
  try {
    const response = await axios.request(options);
    const sixRandomGames = getMultipleRandom(response.data, 6);
    return sixRandomGames
  } catch (error) {
    console.error(error);
  }
}