export async function getHeroes(){
  console.log(process.env)

  const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  const hash = process.env.REACT_APP_MARVEL_HASH;

  const response = await fetch(`http://gateway.marvel.com/v1/public/characters?limit=12&ts=1&apikey=${apiKey}&hash=${hash}`)
  const responseJson = await response.json()

  return responseJson
  
  // .then(response => response.json())
  // .then(heroeJson => this.setState({heroes:heroeJson.data.results, isFetch: false}))

}

export default {
  getHeroes
}