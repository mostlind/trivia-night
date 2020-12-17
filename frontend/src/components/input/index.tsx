import React from "react";
import styled from "@emotion/styled";
import { Stack } from "components/stack";
import { spacing } from "styles/theme";

const InputStyle = styled.input`
  border-radius: 11px 11px;
  display: flex;
  padding: 7px;
  border: none;
`;
const Label = styled.label`
  color: #fff;
`;

const Container = styled(Stack)`
  width: 100%;
`;

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
}

export default function Input({
  name,
  label,
  placeholder,
  defaultValue,
}: InputProps) {
  return (
    <Container direction="vertical" space={spacing.extraSmall}>
      <Label htmlFor={name}>{label}</Label>
      <InputStyle
        defaultValue={defaultValue}
        placeholder={placeholder}
        id={name}
        name={name}
      ></InputStyle>
    </Container>
  );
}
