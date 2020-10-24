import { Stack } from "../stack";
import React from "react";
import { TodoListComponentFragment } from "../../generated/graphql";
import { Todo } from "../todo";

interface TodoListProps {
  todos: TodoListComponentFragment[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}
