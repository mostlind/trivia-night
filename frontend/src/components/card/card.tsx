import React from "react";

import styled from "@emotion/styled";
import { spacing } from "../../styles/theme";
import { Stack } from "../stack";

export interface CardProps {
  mainText: string;
  subText: string;
  backgroundColor: string;
  hoverColor: string;
}

interface ContainerProps {
  backgroundColor: string;
  hoverColor: string;
}

const Container = styled(Stack)`
  background-color: ${(props: ContainerProps) => props.backgroundColor};
  padding: 0.8em ${spacing.medium};
  border-radius: 7px 7px;
  cursor: pointer;

  transition: all 200ms ease-out;
  &:hover {
    background-color: ${(props: ContainerProps) => props.hoverColor};
  }
`;

const TextContainer = styled(Stack)`
  min-width: 0;
`;

const MainText = styled.p`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
`;

const SubText = styled.p`
  font-size: 85%;
  margin: 0;
  padding: 0;
`;

const Circle = styled.div`
  min-height: 1.8rem;
  min-width: 1.8rem;
  background-color: white;
  border-radius: 50% 50%;
  transition: all 200ms ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120%;

  &:hover {
    color: white;
    background-color: #333;
  }
`;

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
