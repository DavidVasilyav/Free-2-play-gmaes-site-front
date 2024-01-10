const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game/search',
  params: {
    criteria: 'the withcer 3'
  },
  headers: {
    'X-RapidAPI-Key': '82323f1493mshf628981ef3cd51cp168617jsn15baaefcf067',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
  }
};
export default async function getNews() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

