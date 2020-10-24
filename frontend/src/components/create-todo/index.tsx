import React, { useState } from "react";
import { useInsertTodoMutation } from "generated/graphql";
import styled from "@emotion/styled";
import { Stack } from "components/stack";

const Container = styled.form`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const InputLine = styled(Stack)``;
const Input = styled.input`
  display: block;
  flex: 1 0 auto;
  border-radius: 5px 5px;
  border: 1px solid #333;
  font-size: 100%;
  padding: 5px;
`;

export function InsertTodo() {
  const [insertState, insertTodo] = useInsertTodoMutation();
  const [description, setDescription] = useState("");

  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        insertTodo({ todo: { description } }).then(console.log);
      }}
    >
      <label htmlFor="todo-description" style={{ marginBottom: "10px" }}>
        What needs to get done?
      </label>

      <InputLine direction="horizontal" space={10}>
        <Input
          onChange={(e) => setDescription(e.target.value)}
          id="todo-description"
          name="todo-description"
        ></Input>
        <button type="submit">Create</button>
      </InputLine>
    </Container>
  );
}
