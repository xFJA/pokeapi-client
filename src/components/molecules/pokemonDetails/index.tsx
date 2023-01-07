import React from "react";
import { PokemonType } from "../../../models/pokemon";
import DetailText from "../../atoms/detailText";
import TypePill from "../../atoms/typePill";
import styles from "./styles.module.scss";

export interface PokemonDetailsProps {
  weight: number;
  height: number;
  experience: number;
  types: PokemonType[];
}

const PokemonDetails = ({
  weight,
  height,
  experience,
  types,
}: PokemonDetailsProps) => {
  const weightInKilograms = weight / 10; // Data received from API in hectograms
  const heightInMetres = height / 10; // Data received from API in decimetres

  return (
    <div>
      <DetailText
        title="Base experience"
        value={`${experience.toString()} points`}
      />
      <DetailText title="Weight" value={`${weightInKilograms} Kg`} />
      <DetailText title="Height" value={`${heightInMetres} m`} />
      <div className={styles.types}>
        {types.map((t, i) => {
          return <TypePill key={i} type={t} />;
        })}
      </div>
    </div>
  );
};

export default PokemonDetails;
