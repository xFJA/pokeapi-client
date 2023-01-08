import axios, { AxiosInstance } from "axios";
import {
  AllPokemons,
  Pokemon,
  PokemonExtended,
  Stat,
  PokemonType,
} from "../models/features/pokedex";
import { AllPokemonsDTO, PokemonExtendedDTO } from "../models/services/pokeapi";

class PokeApi {
  axiosBase: AxiosInstance;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: "https://pokeapi.co/api/v2",
    });
    this.axiosBase = axiosInstance;
  }

  getAll = async (offset: number, limit: number): Promise<AllPokemons> => {
    try {
      const res = await this.axiosBase.get<AllPokemonsDTO>(
        `/pokemon?offset=${offset}&limit=${limit}`
      );

      const allPokemonsDTO = res.data;

      const allPokemons: AllPokemons = {
        count: allPokemonsDTO.count,
        results: allPokemonsDTO.results.map((r) => ({
          name: r.name,
          url: r.url,
        })) as Pokemon[],
      };

      return allPokemons;
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  };

  getPokemon = async (id: string): Promise<PokemonExtended> => {
    try {
      const res = await this.axiosBase.get<PokemonExtendedDTO>(
        `/pokemon/${id}`
      );

      const pokemonExtendedDTO = res.data;

      const pokemonExtended: PokemonExtended = {
        id: pokemonExtendedDTO.id,
        height: pokemonExtendedDTO.height,
        weight: pokemonExtendedDTO.weight,
        baseExperience: pokemonExtendedDTO.base_experience,
        name: pokemonExtendedDTO.name,
        stats: pokemonExtendedDTO.stats.map((s) => ({
          baseStat: s.base_stat,
          name: s.stat.name,
        })) as Stat[],
        types: pokemonExtendedDTO.types.map(
          (t) => t.type.name
        ) as PokemonType[],
      };

      return pokemonExtended;
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  };
}

export default PokeApi;
