"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CourseMaterialCard from "./course-material-card/course-material-card";
import useCourse from "@/hooks/use-course";

const CourseMaterial = () => {
  const materials = [
    { label: "Chapters/Notes", type: "notes" },
    { label: "Flash Cards", type: "flashCards" },
    { label: "Quiz", type: "quizes" },
  ];

  const { loading } = useCourse();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {loading
        ? Array.from({ length: 3 }).map((_, index) => {
            return <Skeleton key={index + 1} className="h-[300px]" />;
          })
        : materials.map((material) => {
            return (
              <CourseMaterialCard key={material.type} material={material} />
            );
          })}
    </div>
  );
};

export default CourseMaterial;
