"use client";

import React, { useEffect, useState } from "react";
import useCourseMaterial from "@/hooks/use-course-material";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ApiLoader from "@/components/loaders/api-loader/api-loader";

interface Notes {
  html: string;
  notes: string;
}

const NotesPage = () => {
  const { loading, materialData } = useCourseMaterial();
  const [notes, setNotes] = useState<Notes[]>([]);
  const [courseCount, setCourseCount] = useState(1);

  useEffect(() => {
    setNotes(materialData.notes);
  }, [materialData]);

  return (
    <section>
      <h2 className="text-4xl text-center font-bold mb-6">Notes</h2>
      <div className="mb-4 flex items-center gap-2">
        {courseCount !== 1 && (
          <Button onClick={() => setCourseCount(courseCount - 1)}>Prev</Button>
        )}
        <div className="w-full flex gap-2">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => {
                return (
                  <Skeleton key={index + 1} className="w-full h-2 rounded" />
                );
              })
            : materialData.notes.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`h-2 w-full ${
                      index < courseCount ? "bg-blue-600" : "bg-zinc-100"
                    } rounded cursor-pointer`}
                    onClick={() => setCourseCount(index + 1)}
                  />
                );
              })}
        </div>
        {courseCount !== materialData.notes.length && (
          <Button onClick={() => setCourseCount(courseCount + 1)}>Next</Button>
        )}
      </div>

      {loading ? (
        <ApiLoader />
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html:
              notes[courseCount - 1]?.html || notes[courseCount - 1]?.notes,
          }}
        />
      )}
    </section>
  );
};

export default NotesPage;
