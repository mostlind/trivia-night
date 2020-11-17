import React from "react";
import { spacing } from "../../styles/theme";
import {
  Container,
  TextContainer,
  MainText,
  SubText,
  Circle,
} from "./card-style";

export interface CardProps {
  mainText: string;
  subText: string;
  backgroundColor: string;
  hoverColor: string;
}

export function Card({
  mainText,
  subText,
  backgroundColor,
  hoverColor,
}: CardProps) {
  return (
    <Container
      space={spacing.medium}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      <TextContainer space={spacing.extraSmall} direction="vertical">
        <MainText>{mainText}</MainText>
        <SubText>{subText}</SubText>
      </TextContainer>
      <Circle>&raquo;</Circle>
    </Container>
  );
}
