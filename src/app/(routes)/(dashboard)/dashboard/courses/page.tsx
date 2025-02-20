import type { Metadata } from "next";
import React from "react";
import CoursesSection from "./_components/courses-section";

export const metadata: Metadata = {
  title: "Courses",
  description: "Courses in SeebaLMS - Your ultimate path of learning.",
};

const CoursesPage = () => {
  return <CoursesSection />;
};

export default CoursesPage;
