import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailText from "./index";

export default {
  title: "Components/Atoms/DetailText",
  component: DetailText,
} as ComponentMeta<typeof DetailText>;

const Template: ComponentStory<typeof DetailText> = (args) => (
  <DetailText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "412 Kg",
  title: "Weight",
};
