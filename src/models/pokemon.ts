export interface AllPokemonsPokeApiResponse {
  count: number;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string; // TODO: Use enum
  };
}

export interface PokemonDetails {
  name: string;
  weight: number;
  height: number;
  types: Type[];
  stats: Stat[];
}
