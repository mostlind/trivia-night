import styled from "@emotion/styled";
import { spacing } from "../../styles/theme";
import { Stack } from "../stack";

interface ContainerProps {
  backgroundColor: string;
  hoverColor: string;
}

export const Container = styled(Stack)`
  background-color: ${(props: ContainerProps) => props.backgroundColor};
  padding: 0.8em ${spacing.medium};
  border-radius: 7px 7px;
  cursor: pointer;

  transition: all 200ms ease-out;
  &:hover {
    background-color: ${(props: ContainerProps) => props.hoverColor};
  }
`;

export const TextContainer = styled(Stack)`
  min-width: 0;
`;

export const MainText = styled.p`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
`;

export const SubText = styled.p`
  font-size: 85%;
  margin: 0;
  padding: 0;
`;

export const Circle = styled.div`
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
