import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailsCard from "./index";
import { Pokemon, PokemonType } from "../../../models/pokemon";

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
    types: [{ slot: 1, type: { name: PokemonType.Bug } }],
    stats: [
      { base_stat: 60, stat: { name: "hp" } },
      { base_stat: 62, stat: { name: "attack" } },
      { base_stat: 63, stat: { name: "defense" } },
      { base_stat: 80, stat: { name: "special-attack" } },
      { base_stat: 80, stat: { name: "special-defense" } },
      { base_stat: 60, stat: { name: "speed" } },
    ],
    base_experience: 134,
  },
};
