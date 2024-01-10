const API_END_POINT = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category='

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '82323f1493mshf628981ef3cd51cp168617jsn15baaefcf067',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

  export default async function getGameByCategory(category) {
    const res = await fetch(`${API_END_POINT}${category}`,options)
    const games = await res.json()
    games.sort((a,b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
})
    return games
  }