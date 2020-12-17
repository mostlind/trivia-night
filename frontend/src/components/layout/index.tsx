import React from "react";
import styled from "@emotion/styled";
import { colors, spacing } from "styles/theme";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Container = styled.div`
  padding: ${spacing.medium};
  padding-top: ${spacing.large};
  background-color: ${colors.background};
  height: 100vh;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  color: white;
  padding-bottom: ${spacing.large};
`;

export function Layout({ children, title }: LayoutProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
