import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { ReactNode } from "react";

type Direction = "vertical" | "horizontal";
type AlignItemsOptions =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

type JustifyContentOptions =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "initial"
  | "inherit";

function margin(direction: Direction = "horizontal", space: number) {
  return direction === "horizontal"
    ? css`
        & > * {
          margin-right: ${space}px;
          line-height: initial;
          &:last-child {
            margin-right: initial;
          }
        }
      `
    : css`
        & > * {
          margin-bottom: ${space}px;
          line-height: initial;
          &:last-child {
            margin-bottom: initial;
          }
        }
      `;
}

export const StackContainer = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  ${(props) => margin(props.direction, props.space)};
  line-height: 0;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export interface StackProps {
  direction?: Direction;
  space: number;
  children: ReactNode;
  className?: string;
  alignItems?: AlignItemsOptions;
  justifyContent?: JustifyContentOptions;
}

export function Stack({
  direction = "horizontal",
  alignItems = "stretch",
  justifyContent = "flex-start",
  space,
  children,
  className,
}: StackProps) {
  return (
    <StackContainer
      direction={direction}
      space={space}
      className={className}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </StackContainer>
  );
}
