export interface AllPokemonsDTO {
    count: number;
    results: PokemonDTO[];
  }
  
  export interface PokemonDTO {
    name: string;
    url: string;
  }

  export interface PokemonExtendedDTO {
    id: string;
    name: string;
    weight: number;
    height: number;
    types: TypeDTO[];
    stats: StatDTO[];
    base_experience: number;
  }
  
  interface StatDTO {
    base_stat: number;
    stat: {
      name: string;
    };
  }
  
  interface TypeDTO {
    slot: number;
    type: {
      name: string;
    };
  }