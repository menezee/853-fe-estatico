import axios from 'axios';

const BASE_PATH = 'https://pokeapi.co/api/v2/pokemon/';
async function fetchPokemon(id) {
  const requestUrl = `${BASE_PATH}${id}`;
  const res = await axios.get(requestUrl);

  return {
    name: res.data.name,
    image: res.data.sprites.front_default,
  };
}

export {
  fetchPokemon,
};
