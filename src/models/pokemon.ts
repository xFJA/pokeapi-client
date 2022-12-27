export interface AllPokemonsPokeApiResponse {
  count: number;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}
