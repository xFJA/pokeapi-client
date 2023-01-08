import React from "react";
import { PokemonType } from "../../../models/features/pokedex";
import styles from "./styles.module.scss";

export interface TypePillProps {
  type: PokemonType;
}

const TypePill = ({ type }: TypePillProps) => {
  return <div className={`${styles[type]}`}>{type}</div>;
};

export default TypePill;
