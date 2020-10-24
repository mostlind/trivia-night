import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Todo, TodoProps } from "./";
import { Priority_Enum } from "../../generated/graphql";

export default {
  title: "Components/Todo",
  component: Todo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TodoProps> = (args) => <Todo {...args} />;

const props: TodoProps = {
  todo: {
    id: "123",
    is_complete: true,
    description: "This is a todo @Context +Project",
    created: "2020-09-04",
    completed: "2020-09-05",
    priority: Priority_Enum.A,
    todo_contexts: [
      {
        context: {
          id: "123",
          name: "Context",
        },
      },
    ],
    todo_projects: [
      {
        project: {
          id: "321å",
          name: "Project",
        },
      },
    ],
  },
};

export function AllThePropsComponent() {
  return <Todo todo={props.todo} />;
}
