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
      {pokemonList.map((p) => {
        const { name, url } = p;
        console.log(p);
        const id = getPokemonIdFromUrL(url);

        // TODO: Manage 'undefined' case (suggestion: show error in the card)
        if (!id) return;

        return (
          <Card id={id} title={name} imageUrl={getPokemonImageUrlFromId(id)} />
        );
      })}
    </div>
  );
};

// TODO: Move to /utils folder and add unit tests
const getPokemonIdFromUrL = (url: string): string | undefined => {
  const urlParts = url.split("/");
  let pokemonId: string | undefined = undefined;

  if (urlParts.length && urlParts[urlParts.length - 1]) {
    pokemonId = urlParts[urlParts.length - 1].replace(/[^0-9]/g, "");
  }

  return pokemonId;
};

const getPokemonImageUrlFromId = (id: string) => {
  const pokemonImageBaseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  return pokemonImageBaseUrl.concat(`${id}.png`);
};

export default CardsGrid;
