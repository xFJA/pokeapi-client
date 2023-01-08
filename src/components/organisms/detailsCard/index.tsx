import React from "react";
import { PokemonExtended } from "../../../models/features/pokedex";
import { getPokemonImageUrlFromId } from "../../../utils/externalPokemonData";
import PokemonDetails from "../../molecules/pokemonDetails";
import PokemonStats from "../../molecules/pokemonStats";
import styles from "./styles.module.scss";

export interface DetailsCardProps {
  pokemon: PokemonExtended;
}

const DetailsCard = ({ pokemon }: DetailsCardProps) => {
  const { id, name, stats, height, weight, baseExperience, types } = pokemon;
  const firstType = types[0];

  return (
    <div className={`${styles.root} ${styles[firstType]}`}>
      <div className={`${styles.header} ${styles[firstType]}`}>
        <span>{name}</span>
      </div>
      <div className={styles.content}>
        <div className={`${styles.imageContainer} ${styles[firstType]}`}>
          <img
            className={styles.image}
            src={getPokemonImageUrlFromId(id)}
            alt="sprite"
          />
        </div>

        <div className={styles.details}>
          <PokemonDetails
            experience={baseExperience}
            height={height}
            weight={weight}
            types={types}
          />
        </div>

        <div className={styles.stats}>
          <PokemonStats stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
