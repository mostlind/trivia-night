import React from "react";
import { TodoComponentFragment } from "../../generated/graphql";
import styled from "@emotion/styled";
import { Stack } from "../stack";
import Link from "next/link";

const Container = styled(Stack)`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);
`;

export interface TodoProps {
  todo: TodoComponentFragment;
}

function DescriptionWithProjectContextLinks({
  todo,
}: {
  todo: TodoComponentFragment;
}) {
  const projectsAndContexts = todo.todo_projects
    .map(({ project }) => {
      return {
        type: "project",
        matcher: "+" + project.name,
        id: project.id,
      };
    })
    .concat(
      todo.todo_contexts.map(({ context }) => {
        return {
          type: "context",
          matcher: "@" + context.name,
          id: context.id,
        };
      })
    );

  let restOfDescription = todo.description;
  let parts = [];
  let foundMatch = false;
  let currentPart = "";
  while (restOfDescription.length > 0) {
    for (let projectOrContext of projectsAndContexts) {
      if (restOfDescription.startsWith(projectOrContext.matcher)) {
        parts.push(currentPart);
        currentPart = "";
        parts.push(
          <Link
            key={projectOrContext.id}
            href={`/${projectOrContext.type}/${projectOrContext.id}`}
          >
            {projectOrContext.matcher}
          </Link>
        );
        foundMatch = true;
        restOfDescription = restOfDescription.slice(
          projectOrContext.matcher.length
        );
      }
    }
    if (!foundMatch) {
      currentPart += restOfDescription.slice(0, 1);
      restOfDescription = restOfDescription.slice(1);
    }
    foundMatch = false;
  }

  parts.push(currentPart);

  return <p>{parts}</p>;
}

export function Todo({ todo }: TodoProps) {
  return (
    <Container direction="horizontal" space={15}>
      {todo.is_complete ? <p>x</p> : null}
      <DescriptionWithProjectContextLinks
        todo={todo}
      ></DescriptionWithProjectContextLinks>
      <h3>{todo.completely_useless}</h3>
      {todo.priority !== null ? <p>Priority: {todo.priority}</p> : null}
      {todo.created !== null ? <p>Created: {todo.created}</p> : null}
      {todo.completed !== null ? <p>Completed: {todo.completed}</p> : null}
    </Container>
  );
}
