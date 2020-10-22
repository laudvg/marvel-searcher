const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
const hash = process.env.REACT_APP_MARVEL_HASH;

export async function getHeroes(queryNameString, limit = 10){
  
  const baseQueryUrl = `http://gateway.marvel.com/v1/public/characters?`;
  const searchNameParamUrl = queryNameString ? `nameStartsWith=${queryNameString}&` : '';
  const basicParamsUrl = `limit=${limit}&ts=1&apikey=${apiKey}&hash=${hash}`;

  const queryUrl = baseQueryUrl + searchNameParamUrl + basicParamsUrl;

  
  const response = await fetch(queryUrl);
  const responseJson = await response.json();

  if (responseJson.code === 200) {
    return responseJson.data.results;
  } else {
    throw new Error(`Error fetching Data. Status code ${responseJson.code}.`);
  }
}

export default {
  getHeroes
}
