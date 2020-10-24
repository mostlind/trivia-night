import { useProjectListPageQuery } from "generated/graphql";
import React from "react";
import { ProjectSummary } from "../../components/project-summary";

export default function ProjectLIstPage() {
  const [result, _refetch] = useProjectListPageQuery();
  const { data, error, fetching } = result;
  if (fetching) {
    return <h1>Loading</h1>;
  }

  if (error) {
    console.error(error);
    return <h1>Error</h1>;
  }

  return (
    <ul>
      {data!.project.map((project) => (
        <ProjectSummary project={project}></ProjectSummary>
      ))}
    </ul>
  );
}
