import type { Metadata } from "next";
import React from "react";
import CourseHeaderCard from "./_components/course-header-card";
import CourseMaterial from "./_components/course-material";
import Chapters from "./_components/chapters";

export const metadata: Metadata = {
  title: "Course",
  description: "Course in SeebaLMS - Your ultimate path of learning.",
};

const SingleCourse = () => {
  return (
    <>
      <CourseHeaderCard />
      <section>
        <h2 className="text-3xl text-center font-bold my-10">
          Course Materials
        </h2>
        <CourseMaterial />
      </section>
      <section>
        <h2 className="text-3xl text-center font-bold my-10">Chapters</h2>
        <Chapters />
      </section>
    </>
  );
};

export default SingleCourse;
