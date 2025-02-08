"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import useCourse from "@/hooks/use-course";

const Chapters = () => {
  const { loading, course } = useCourse();

  return (
    <div className="space-y-4">
      {loading
        ? Array.from({ length: 4 }).map((_, index) => {
            return <Skeleton key={index + 1} className="h-[100px]" />;
          })
        : course?.courseOutline?.course?.chapters.map((chapter) => {
            return (
              <div
                key={chapter?.title.toLowerCase().replace(" ", "-")}
                className="p-4 md:p-6 flex gap-4 md:gap-6 lg:gap-8 shadow border rounded-lg"
              >
                <span className="text-2xl">{chapter?.emoji}</span>
                <div>
                  <h4 className="text-xl font-semibold">{chapter?.title}</h4>
                  <p className="text-zinc-700 mb-2">{chapter?.description}</p>
                  <Collapsible>
                    <CollapsibleTrigger className="font-bold flex items-center gap-2">
                      Topics <ChevronDownIcon className="w-4 h-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {chapter?.topics.map((topic, index) => {
                        return (
                          <p key={topic}>
                            <span className="font-semibold">{index + 1}. </span>
                            {topic}
                          </p>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Chapters;
