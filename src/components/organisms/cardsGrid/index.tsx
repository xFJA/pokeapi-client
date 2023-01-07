import React, { useState } from "react";
import { Pokemon, PokemonDetails } from "../../../models/pokemon";
import PokeApi from "../../../services/pokeapi";
import { getPokemonImageUrlFromId } from "../../../utils/externalPokemonData";
import Card from "../../molecules/card";
import Modal from "../../molecules/modal";
import DetailsCard from "../detailsCard";
import styles from "./styles.module.scss";

const Api = new PokeApi();

export interface CardsGridProps {
  pokemonList: Pokemon[];
}

const CardsGrid = ({ pokemonList }: CardsGridProps) => {
  const [pokemonSelected, setPokemonSelected] =
    useState<PokemonDetails | undefined>(undefined);

  const handleCardClick = (id: string) => {
    Api.getPokemon(id)
      .then((res) => setPokemonSelected(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.root}>
      {pokemonSelected && (
        <Modal onBackdropClick={() => setPokemonSelected(undefined)}>
          <DetailsCard pokemon={pokemonSelected} />
        </Modal>
      )}

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
            onClick={() => handleCardClick(id)}
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

export default CardsGrid;
