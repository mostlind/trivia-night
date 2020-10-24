import React from "react";
import Head from "next/head";
import { TodoList } from "../components/todo-list";
import { InsertTodo } from "../components/create-todo";
import { useIndexPageQuery } from "generated/graphql";
import { Stack } from "components/stack";

export default function Index() {
  // const [result, _refetch] = useIndexPageQuery();
  // const { data, fetching, error } = result;
  // if (error) {
  //   console.error(error);
  //   return <h1>Error</h1>;
  // }

  // if (fetching) {
  //   return <h1>Loading</h1>;
  // }
  // return (
  //   <Stack direction="vertical" space={15}>
  //     <TodoList todos={data!.todo} />
  //     <InsertTodo />
  //   </Stack>
  // );

  return <h1>hey</h1>
}
