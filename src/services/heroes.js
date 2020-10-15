const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
const hash = process.env.REACT_APP_MARVEL_HASH;
const baseUrl = "http://gateway.marvel.com/v1/public/characters?"

export async function getHeroes(limit = 20){
  const response = await fetch(`${baseUrl}limit=${limit}&ts=1&apikey=${apiKey}&hash=${hash}`)
  const responseJson = await response.json()

  return responseJson.data.results;
}

export async function getBySearch(query, limit = 20){
  const response = await fetch(`${baseUrl}nameStartsWith=${query}&limit=${limit}&ts=1&apikey=${apiKey}&hash=${hash}`)
  const responseJson = await response.json()

  return responseJson.data.results;
}

export default {
  getHeroes,
  getBySearch
}