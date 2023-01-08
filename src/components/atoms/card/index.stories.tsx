import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./index";

export default {
  title: "Components/Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  title: "bulbasaur",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
};
