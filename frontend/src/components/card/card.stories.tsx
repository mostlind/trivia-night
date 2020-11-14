import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import { Card } from "./card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

/**
 * Primary UI component for user interaction
 */
export function Normal() {
  return <Card />;
}
