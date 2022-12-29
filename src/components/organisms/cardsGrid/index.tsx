import React from "react";
import { Pokemon } from "../../../models/pokemon";
import Card from "../../molecules/card";
import styles from "./styles.module.scss";

export interface CardsGridProps {
  pokemonList: Pokemon[];
}

const CardsGrid = ({ pokemonList }: CardsGridProps) => {
  return (
    <div className={styles.root}>
      {pokemonList.map((p, i) => {
        const { name, url } = p;
        const id = getPokemonIdFromUrL(url);

        // TODO: Manage 'undefined' case (suggestion: show error in the card)
        if (!id) return <></>;

        return (
          <Card
            key={i}
            id={id}
            title={name}
            imageUrl={getPokemonImageUrlFromId(id)}
          />
        );
      })}
    </div>
  );
};

// TODO: Move to /utils folder and add unit tests
const getPokemonIdFromUrL = (url: string): string | undefined => {
  const urlParts = url.split("/");
  const pokemonId = urlParts.length ? urlParts[urlParts.length - 2] : undefined;
  return pokemonId;
};

const getPokemonImageUrlFromId = (id: string) => {
  const pokemonImageBaseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  return pokemonImageBaseUrl.concat(`${id}.png`);
};

export default CardsGrid;
