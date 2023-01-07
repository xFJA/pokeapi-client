import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PokemonDetails from "./index";

export default {
  title: "Components/Molecules/PokemonDetails",
  component: PokemonDetails,
} as ComponentMeta<typeof PokemonDetails>;

const Template: ComponentStory<typeof PokemonDetails> = (args) => (
  <PokemonDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  weight: 123,
  experience: 342,
  height: 12,
};
