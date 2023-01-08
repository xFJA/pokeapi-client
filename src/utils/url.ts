/**
 * Returns the ID of a pokemon obtained from the URL associated to that pokemon which origin
 * is 'https://pokeapi.co/'.
 * 
 * @param url The URL associated to a certain pokemon.
 * @returns The ID of the pokemon if exists.
 */
export const getPokemonIdFromUrL = (url: string): string | undefined => {
    const urlParts = url.split("/");
    const pokemonId = urlParts.length ? urlParts[urlParts.length - 2] : undefined;
    return pokemonId;
  };