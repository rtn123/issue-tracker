import React from "react";
import ReactMarkdown from "react-markdown";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Heading, Flex, Text, Card } from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

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
      <Heading>{title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={status} />
        <Text>{createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
