"use client";

import { Sidebar } from "@/components/sidebar";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import Link from "next/link";

export const BoardCard = (props: any) => {
  return (
    <Card className={" hover:scale-105 w-36 rounded-sm "}>
      <CardHeader>{props.board?.name}</CardHeader>
      <CardBody>{props.board?.description}</CardBody>
      <CardFooter>
        <Link href={`/board/${props.board?.id}`}>
          <Button>View</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
