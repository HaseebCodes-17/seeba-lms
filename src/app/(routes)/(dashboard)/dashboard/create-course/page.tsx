import type { Metadata } from "next";
import React from "react";
import CreateCourseSection from "./_components/create-course-section";

export const metadata: Metadata = {
  title: "Create New Course",
  description:
    "Create New Course in SeebaLMS - Your ultimate path of learning.",
};

const CreateCoursePage = () => {
  return <CreateCourseSection />;
};

export default CreateCoursePage;
