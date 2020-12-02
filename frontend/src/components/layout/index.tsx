import React from "react";
import styled from "@emotion/styled";
import { spacing } from "styles/theme";
import { Stack } from "components/stack";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Container = styled(Stack)`
  padding: ${spacing.medium};
  padding-top: ${spacing.large};
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  color: white;
`;

function Layout({ children, title }: LayoutProps) {
  return (
    <Container direction="vertical" space={spacing.large}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
