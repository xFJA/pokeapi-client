import React, { useEffect, useState } from "react";
import Pagination from "../../components/molecules/pagination";
import CardsGrid from "../../components/organisms/cardsGrid";
import { AllPokemonsPokeApiResponse, Pokemon } from "../../models/pokemon";
import PokeApi from "../../services/pokeapi";
import styles from "./styles.module.scss";

const Api = new PokeApi();

const PAGINATION_LIMIT = 20;

interface PokedexState {
  pokemons: Pokemon[];
  count: number;
}

const Pokedex = () => {
  const [pokedexState, setPokedexState] = useState<PokedexState>({
    pokemons: [],
    count: 0,
  });

  const getAllPokemons = (limit: number, offset: number) => {
    Api.getAll(offset, limit)
      .then((res: AllPokemonsPokeApiResponse) =>
        setPokedexState({ pokemons: res.results, count: res.count })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllPokemons(PAGINATION_LIMIT, 0);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.pagination}>
        <Pagination
          count={pokedexState.count}
          limit={PAGINATION_LIMIT}
          onMakeRequest={(limit: number, offset: number) =>
            getAllPokemons(limit, offset)
          }
        />
      </div>

      <CardsGrid pokemonList={pokedexState.pokemons} />
    </div>
  );
};

export default Pokedex;
