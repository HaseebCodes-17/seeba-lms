"use client";

import { useTransition, useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { Course } from "@/types/course";
import axios from "axios";

const useCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course>();
  const [loading, start] = useTransition();

  const fetchCourse = useCallback(() => {
    start(async () => {
      const response = await axios.get(`/api/course?id=${courseId}`);

      if (response.status === 200) {
        setCourse(response.data.data);
      }
    });
  }, [start, courseId]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  return { course, loading, fetchCourse };
};

export default useCourse;
