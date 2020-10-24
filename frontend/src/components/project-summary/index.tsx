import React from "react";
import Link from "next/link";
import { ProjectSummaryComponentFragment } from "generated/graphql";

interface ProjectProps {
  project: ProjectSummaryComponentFragment;
}

export function ProjectSummary({ project }: ProjectProps) {
  return (
    <Link href={`/project/${project.id}`}>
      <h2>{project.name}</h2>
    </Link>
  );
}
