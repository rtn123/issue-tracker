import React from "react";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { color: "red", label: "open" },
  IN_PROGRESS: { color: "violet", label: "In progress" },
  CLOSED: { color: "green", label: "CLOSED" },
};

const IssueStatusBadge = ({ status }: Props) => {
  const { label, color } = statusMap[status];

  return <Badge color={color}>{label}</Badge>;
};

export default IssueStatusBadge;
