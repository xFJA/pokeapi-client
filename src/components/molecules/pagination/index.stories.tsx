import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pagination from "./index";

export default {
  title: "Components/Molecules/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 234,
  limit: 20,
  onMakeRequest: () => {},
};
