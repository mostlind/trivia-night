import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import { Card, CardProps } from "./card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
    hoverColor: { control: "color" },
  },
} as Meta;

/**
 * Primary UI component for user interaction
 */
export function Normal({
  mainText = "What is the answer to this question?",
  subText = "Question 1",
  backgroundColor = "#41ffcc",
  hoverColor = "#8effe1",
}: CardProps) {
  return (
    <Card
      mainText={mainText}
      subText={subText}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    />
  );
}
