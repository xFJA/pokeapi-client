import axios, { AxiosInstance } from "axios";
import { AllPokemonsPokeApiResponse } from "../models/pokemon";

class PokeApi {
  axiosBase: AxiosInstance;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: "https://pokeapi.co/api/v2",
    });
    this.axiosBase = axiosInstance;
  }

  getAll = async (
    offset: number,
    limit: number
  ): Promise<AllPokemonsPokeApiResponse> => {
    try {
      const res = await this.axiosBase.get<AllPokemonsPokeApiResponse>(
        `/pokemon?offset=${offset}&limit=${limit}`
      );
      return res.data;
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  };
}

export default PokeApi;
