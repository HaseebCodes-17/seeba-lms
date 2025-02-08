"use client";

import {
  useTransition,
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useCallback,
} from "react";
import { Course } from "@/types/course";
import axios from "axios";

interface CoursesContextType {
  loading: boolean;
  courses: Course[];
  search: string;
  sort: string;
  limit: number;
  offset: number;
  setSearch: (search: string) => void;
  setSort: (sort: string) => void;
  setLimit: (limit: number) => void;
  setOffset: (offset: number) => void;
  fetchCourses: () => void;
}

const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

export const CoursesProvider = ({ children }: { children: ReactNode }) => {
  const [loading, start] = useTransition();
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [limit, setLimit] = useState<number>(12);
  const [offset, setOffset] = useState<number>(0);

  const fetchCourses = useCallback(() => {
    start(async () => {
      const response = await axios.get(
        `/api/course?search=${search}&sort=${sort}&limit=${limit}&offset=${offset}`
      );

      if (response.status === 200) {
        setCourses(response.data.data);
      }
    });
  }, [search, sort, limit, offset, start]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <CoursesContext.Provider
      value={{
        loading,
        courses,
        search,
        setSearch,
        sort,
        setSort,
        limit,
        setLimit,
        offset,
        setOffset,
        fetchCourses,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  const context = useContext(CoursesContext);

  if (!context) {
    throw new Error("useCoursesContext must be used within a CoursesProvider");
  }

  return context;
};
