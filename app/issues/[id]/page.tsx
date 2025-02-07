import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    notFound();
  }

  const { title, description, status, createdAt } = issue;

  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{status}</p>
      <p>{createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
