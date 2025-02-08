"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import GenerateBtn from "./generate-btn";
import { Badge } from "@/components/ui/badge";
import useCourseMaterial from "@/hooks/use-course-material";

interface Props {
  material: {
    label: string;
    type: string;
  };
}

const CourseMaterialCard = ({ material }: Props) => {
  const { label, type } = material;

  const { materialData } = useCourseMaterial();

  const isMaterialReady =
    materialData[type as keyof typeof materialData].length === 0;

  return (
    <Card className={`${isMaterialReady && "grayscale"}`}>
      <CardHeader className="block">
        <Badge className="bg-green-500 hover:bg-green-500 m-auto mb-4 w-max block">
          {isMaterialReady ? "Generate" : "Ready"}
        </Badge>
        <Image
          className="m-auto select-none"
          src={`/course-materials/${type}.png`}
          height={100}
          width={100}
          alt={label}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center">{label}</CardTitle>
      </CardContent>
      <CardFooter>
        <GenerateBtn type={type} isMaterialReady={isMaterialReady as boolean} />
      </CardFooter>
    </Card>
  );
};

export default CourseMaterialCard;
