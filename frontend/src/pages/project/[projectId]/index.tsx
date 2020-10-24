import { TodoList } from "components/todo-list";
import { useProjectPageQuery } from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;
  // const [result, _refectch] = useProjectPageQuery({
  //   variables: { projectId: projectId },
  // });

  // const { data, error, fetching } = result;

  // if (error) {
  //   console.error(error);
  //   return <div>Error</div>;
  // }

  // if (fetching) {
  //   return <div>Loading..</div>;
  // }
  // const project = data?.project_by_pk;

  // if (!project) {
  //   return <div>404</div>;
  // }

  return (
    <div>
      <h1>{projectId}</h1>
    </div>
  );
}
