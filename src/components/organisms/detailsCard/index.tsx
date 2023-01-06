import React, { useEffect, useState } from "react";
import { PokemonDetails } from "../../../models/pokemon";
import PokeApi from "../../../services/pokeapi";
import styles from "./styles.module.scss";

const Api = new PokeApi();

export interface DetailsCardProps {
  pokemonId: string;
}

const DetailsCard = ({ pokemonId }: DetailsCardProps) => {
  const [pokemon, setPokemon] = useState<PokemonDetails>();

  useEffect(() => {
    Api.getPokemon(pokemonId)
      .then((res) => setPokemon(res))
      .catch((err) => console.error(err));
  }, []);

  return <div className={styles.root}>
    
  </div>;
};

export default DetailsCard;
