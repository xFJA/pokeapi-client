import React, { useState } from "react";
import { Pokemon, PokemonExtended } from "../../../models/features/pokedex";
import PokeApi from "../../../services/pokeapi";
import { getPokemonImageUrlFromId } from "../../../utils/externalPokemonData";
import { getPokemonIdFromUrL } from "../../../utils/url";
import Card from "../../atoms/card";
import Modal from "../../molecules/modal";
import DetailsCard from "../../organisms/detailsCard";
import styles from "./styles.module.scss";

const Api = new PokeApi();

export interface CardsGridProps {
  pokemonList: Pokemon[];
}

const CardsGrid = ({ pokemonList }: CardsGridProps) => {
  const [pokemonSelected, setPokemonSelected] =
    useState<PokemonExtended | undefined>(undefined);

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

export default CardsGrid;
