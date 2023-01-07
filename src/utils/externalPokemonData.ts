export const getPokemonImageUrlFromId = (id: string) => {
  const pokemonImageBaseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  return pokemonImageBaseUrl.concat(`${id}.png`);
};
