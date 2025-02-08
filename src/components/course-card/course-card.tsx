"use client";

import React from "react";
import { Course } from "@/types/course";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import DeleteBtn from "./delete-btn";

const CourseCard = ({ course }: { course: Course }) => {
  const { id, topic, difficultyLevel, courseOutline } = course;
  const { title, image, chapters } = courseOutline.course;

  return (
    <Card className="hover:shadow-md transition-all">
      <Link href={`/dashboard/course/${id}`}>
        <CardHeader className="flex-row justify-between">
          <Avatar>
            <AvatarImage className="object-cover" src={image} />
            <AvatarFallback>LMS</AvatarFallback>
          </Avatar>
          <Badge>{difficultyLevel}</Badge>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-lg">{topic}</CardTitle>
          <CardDescription>{title}</CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="justify-between">
        <p>{chapters.length} Chapters</p>
        <DeleteBtn id={id} />
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
