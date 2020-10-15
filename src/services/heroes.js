const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
const hash = process.env.REACT_APP_MARVEL_HASH;
// const basic = 

export async function getHeroes(limit = 12){
  const response = await fetch(`http://gateway.marvel.com/v1/public/characters?limit=${limit}&ts=1&apikey=${apiKey}&hash=${hash}`)
  const responseJson = await response.json()

  return responseJson.data.results;
}

export async function getBySearch(query, limit = 12){
  const response = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&limit=${limit}&ts=1&apikey=${apiKey}&hash=${hash}`)
  const responseJson = await response.json()

  return responseJson.data.results;
}

export default {
  getHeroes,
  getBySearch
}