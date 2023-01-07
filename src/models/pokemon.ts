export interface AllPokemonsPokeApiResponse {
  count: number;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: PokemonType;
  };
}

export interface PokemonExtended {
  id: string;
  name: string;
  weight: number;
  height: number;
  types: Type[];
  stats: Stat[];
  base_experience: number;
}

export enum PokemonType {
  Grass = "grass",
  Water = "water",
  Fire = "fire",
  Poison = "poison",
  Bug = "bug",
  Flying = "flying",
  Normal = "normal",
  Steel = "steel",
  Ghost = "ghost",
  Dark = "dark",
  Dragon = "dragon",
  Electric = "electric",
  Ground = "ground",
  Rock = "rock",
  Psychic = "psychic",
  Ice = "ice",
  Fairy = "fairy",
  Fighting = "fighting",
}
