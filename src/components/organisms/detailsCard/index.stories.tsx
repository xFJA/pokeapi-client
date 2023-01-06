import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailsCard from "./index";
import { Pokemon } from "../../../models/pokemon";

export default {
  title: "Components/Organisms/DetailsCard",
  component: DetailsCard,
} as ComponentMeta<typeof DetailsCard>;

const Template: ComponentStory<typeof DetailsCard> = (args) => (
  <DetailsCard {...args} />
);

export const Default = Template.bind({});

const defaultPokemon: Pokemon = {
  name: "bulbasaur",
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
};
Default.args = {};
