import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from "./index";

export default {
  title: "Components/Atoms/ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 60,
  limit: 255,
};
