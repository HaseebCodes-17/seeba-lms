"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import useCourse from "@/hooks/use-course";

const CourseCard = () => {
  const { course, loading } = useCourse();

  return loading ? (
    <Skeleton className="h-[250px]" />
  ) : (
    <header className="relative bg-sidebar-accent p-4 md:px-6 lg:px-8 flex max-sm:flex-wrap gap-4 lg:gap-6 rounded-lg shadow-sm">
      <Badge className="absolute top-4 right-4">
        {course?.difficultyLevel}
      </Badge>
      <Image
        className="max-sm:m-auto select-none"
        src={
          // course?.courseOutline?.course?.image ||
          "/placeholder-images/course.png"
        }
        alt={course?.courseOutline?.course?.title || "Course Image"}
        width={130}
        height={100}
      />
      <div>
        <h3 className="underline">
          <span className="font-semibold">Topic: </span>
          {course?.topic}
        </h3>
        <h2 className="text-2xl text-zinc-700 font-bold">
          {course?.courseOutline?.course?.title}
        </h2>
        <p className="text-zinc-600 font-semibold mb-2">
          {course?.courseOutline?.course?.description}
        </p>
        <h5 className="text-blue-600">
          <span className="font-semibold">Total Chapters: </span>
          {course?.courseOutline?.course?.chapters?.length}
        </h5>
      </div>
    </header>
  );
};

export default CourseCard;
