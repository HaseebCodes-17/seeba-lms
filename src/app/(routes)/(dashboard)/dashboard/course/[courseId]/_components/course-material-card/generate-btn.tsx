"use client";

import React, { useTransition } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import useCourse from "@/hooks/use-course";
import { Loader } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  type: string;
  isMaterialReady: boolean;
}

const GenerateBtn = ({ type, isMaterialReady }: Props) => {
  const { courseId } = useParams();
  const [generating, start] = useTransition();
  const { course } = useCourse();

  const { toast } = useToast();
  const { push } = useRouter();

  const generateCourseMaterial = () => {
    start(async () => {
      try {
        const response = await axios.patch("/api/course-material", {
          courseId,
          courseType: type,
          title: course?.courseOutline?.course?.title,
          description: course?.courseOutline?.course?.description,
          chapters: course?.courseOutline?.course?.chapters,
        });

        if (response.status === 200) {
          toast({
            title: response.statusText,
            description: response.data.message,
          });
          push(`/dashboard/course/${courseId}/${type}`);
        }
        console.log(response)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast({
            variant: "destructive",
            title: error.response?.statusText,
            description: error.response?.data.message,
          });
          console.error(error);
        }
        console.error(error)
      }
    });
  };

  return !isMaterialReady ? (
    <Button className="w-full" variant="outline" asChild>
      <Link href={`/dashboard/course/${courseId}/${type}`}>Read</Link>
    </Button>
  ) : (
    <Button
      className="w-full"
      aria-label={generating ? "Generating..." : "Generate"}
      onClick={generateCourseMaterial}
      disabled={generating}
    >
      {generating ? (
        <>
          Generating <Loader className="animate-spin" />
        </>
      ) : (
        "Generate"
      )}
    </Button>
  );
};

export default GenerateBtn;
