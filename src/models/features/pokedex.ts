export interface AllPokemons {
  count: number;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonExtended {
  id: string;
  name: string;
  weight: number;
  height: number;
  types: PokemonType[];
  stats: Stat[];
  baseExperience: number;
}

export interface Stat {
  baseStat: number;
  name: string;
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
