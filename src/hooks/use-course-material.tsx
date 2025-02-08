"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const useCourseMaterial = () => {
  const [loading, start] = useTransition();
  const { courseId } = useParams();
  const [materialData, setMaterialData] = useState<{
    notes: [];
    flashCards: [];
    quizes: [];
  }>({ notes: [], flashCards: [], quizes: [] });

  const fetchCourseMaterial = useCallback(() => {
    start(async () => {
      const response = await axios.get(
        `/api/course-material?courseId=${courseId}`
      );
      const data = response.data.data;
      setMaterialData({
        notes: data.notes,
        flashCards: data.flashCards,
        quizes: data.quizes,
      });
    });
  }, [start, courseId]);

  useEffect(() => {
    fetchCourseMaterial();
  }, [fetchCourseMaterial]);

  return { materialData, loading, fetchCourseMaterial };
};

export default useCourseMaterial;
