"use client";

import React, { useEffect } from "react";
import Header from "./_components/header";
import CourseCard from "@/components/course-card/course-card";
import { useCoursesContext } from "../_contexts/courses-provider";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

const Dashboard = () => {
  const { loading, courses, setLimit } = useCoursesContext();

  useEffect(() => {
    setLimit(3);
  }, [setLimit]);

  return (
    <>
      <Header />
      <section>
        <h3 className="text-3xl text-center font-bold my-8">
          Recently Created Courses
        </h3>
        {!loading && courses.length === 0 && (
          <div className="grid place-items-center gap-2">
            <p className="text-lg text-zinc-700 font-semibold">
              No courses found
            </p>
            <Button variant="secondary" asChild>
              <Link href="/dashboard/create-course">
                <Plus /> Create New
              </Link>
            </Button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => {
                return <Skeleton key={index + 1} className="h-[300px]" />;
              })
            : courses.map((course) => {
                return <CourseCard key={course.id} course={course} />;
              })}
        </div>
        {!loading && (
          <div className="flex justify-end">
            <Button
              className="text-right font-semibold mt-4"
              variant="ghost"
              asChild
            >
              <Link href="/dashboard/courses">
                View All Courses <ArrowRight />
              </Link>
            </Button>
          </div>
        )}
      </section>
    </>
  );
};

export default Dashboard;
