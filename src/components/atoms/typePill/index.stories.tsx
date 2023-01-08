import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TypePill from "./index";
import { PokemonType } from "../../../models/features/pokedex";

export default {
  title: "Components/Atoms/TypePill",
  component: TypePill,
} as ComponentMeta<typeof TypePill>;

const Template: ComponentStory<typeof TypePill> = (args) => (
  <TypePill {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: PokemonType.Grass,
};
