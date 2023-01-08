import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailsCard from "./index";
import { PokemonType } from "../../../models/features/pokedex";

export default {
  title: "Components/Organisms/DetailsCard",
  component: DetailsCard,
} as ComponentMeta<typeof DetailsCard>;

const Template: ComponentStory<typeof DetailsCard> = (args) => (
  <DetailsCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pokemon: {
    id: "1",
    name: "Pikachu",
    weight: 123,
    height: 23,
    types: [PokemonType.Bug],
    stats: [
      { baseStat: 60, name: "hp" },
      { baseStat: 62, name: "attack" },
      { baseStat: 63, name: "defense" },
      { baseStat: 80, name: "special-attack" },
      { baseStat: 80, name: "special-defense" },
      { baseStat: 60, name: "speed" },
    ],
    baseExperience: 134,
  },
};
