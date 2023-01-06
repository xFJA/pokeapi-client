import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PokemonStats from "./index";
import { Stat } from "../../../models/pokemon";

export default {
  title: "Components/Molecules/PokemonStats",
  component: PokemonStats,
} as ComponentMeta<typeof PokemonStats>;

const Template: ComponentStory<typeof PokemonStats> = (args) => (
  <PokemonStats {...args} />
);

const defaultStats: Stat[] = [
  { base_stat: 60, stat: { name: "hp" } },
  { base_stat: 62, stat: { name: "attack" } },
  { base_stat: 63, stat: { name: "defense" } },
  { base_stat: 80, stat: { name: "special-attack" } },
  { base_stat: 80, stat: { name: "special-defense" } },
  { base_stat: 60, stat: { name: "speed" } },
];

export const Default = Template.bind({});
Default.args = {
  stats: defaultStats,
};
