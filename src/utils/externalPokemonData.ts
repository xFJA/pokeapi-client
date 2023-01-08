/**
 * Returns the image URL of the pokemon given its ID from a GitHub source that is
 * related to 'https://pokeapi.co/' API outcome.
 * 
 * @param id The pokemon ID.
 * @returns The URL to the main image of the pokemon.
 */
export const getPokemonImageUrlFromId = (id: string) => {
  const pokemonImageBaseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  return pokemonImageBaseUrl.concat(`${id}.png`);
};
