import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PokemonStats from "./index";
import { Stat } from "../../../models/features/pokedex";

export default {
  title: "Components/Molecules/PokemonStats",
  component: PokemonStats,
} as ComponentMeta<typeof PokemonStats>;

const Template: ComponentStory<typeof PokemonStats> = (args) => (
  <PokemonStats {...args} />
);

const defaultStats: Stat[] = [
  { baseStat: 60, name: "hp" },
  { baseStat: 62, name: "attack" },
  { baseStat: 63, name: "defense" },
  { baseStat: 80, name: "special-attack" },
  { baseStat: 80, name: "special-defense" },
  { baseStat: 60, name: "speed" },
];

export const Default = Template.bind({});
Default.args = {
  stats: defaultStats,
};
