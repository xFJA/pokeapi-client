import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardsGrid from "./index";
import { Pokemon } from "../../../models/features/pokedex";

export default {
  title: "Components/Templates/CardsGrid",
  component: CardsGrid,
} as ComponentMeta<typeof CardsGrid>;

const Template: ComponentStory<typeof CardsGrid> = (args) => (
  <CardsGrid {...args} />
);

export const Default = Template.bind({});

const defaultPokemon: Pokemon = {
  name: "bulbasaur",
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
};
Default.args = { pokemonList: Array(10).fill(defaultPokemon) };
