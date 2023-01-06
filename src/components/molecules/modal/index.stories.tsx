import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./index";

export default {
  title: "Components/Molecules/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal children={<h1></h1>} onBackdropClick={() => {}} />
);

export const Default = Template.bind({});
