import React from "react";
import { spacing } from "../../styles/theme";
import { Container, TextContainer, MainText, SubText } from "./card.style";

export interface CardProps {
  mainText: string;
  subText?: string;
  textColor?: string;
  backgroundColor: string;
  hoverColor: string;
  button?: React.ReactNode;
  borderColor?: string;
}

export function Card({
  mainText,
  subText,
  textColor,
  backgroundColor,
  hoverColor,
  button,
  borderColor = backgroundColor,
}: CardProps) {
  return (
    <Container
      space={spacing.medium}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      borderColor={borderColor}
      textColor={textColor}
    >
      <TextContainer space={spacing.extraSmall} direction="vertical">
        <MainText>{mainText}</MainText>
        {subText !== undefined ? <SubText>{subText}</SubText> : null}
      </TextContainer>
      {button}
    </Container>
  );
}
