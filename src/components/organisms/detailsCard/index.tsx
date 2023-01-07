import React from "react";
import { PokemonDetails } from "../../../models/pokemon";
import { getPokemonImageUrlFromId } from "../../../utils/externalPokemonData";
import PokemonStats from "../../molecules/pokemonStats";
import styles from "./styles.module.scss";

export interface DetailsCardProps {
  pokemon: PokemonDetails;
}

const DetailsCard = ({ pokemon }: DetailsCardProps) => {
  const { id, name, stats } = pokemon;

  return (
    <div className={styles.root}>
      <h1>{`#${id} ${name}`}</h1>
      <img
        className={styles.image}
        src={getPokemonImageUrlFromId(id)}
        alt="sprite"
      />
      <PokemonStats stats={stats} />
    </div>
  );
};

export default DetailsCard;
