import React, { useEffect, useState } from "react";
import CardsGrid from "../../components/organisms/cardsGrid";
import { AllPokemonsPokeApiResponse, Pokemon } from "../../models/pokemon";
import PokeApi from "../../services/pokeapi";
import styles from "./styles.module.scss";

const Api = new PokeApi();

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  useEffect(() => {
    Api.getAll(0, 20)
      .then((res: AllPokemonsPokeApiResponse) => setPokemonList(res.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.root}>
      <CardsGrid pokemonList={pokemonList} />
    </div>
  );
};

export default Pokedex;
