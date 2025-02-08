"use client";

import React, { useEffect } from "react";
import SearchBar from "./_components/search-bar";
import SortDropdown from "./_components/sort-dropdown";
import { Skeleton } from "@/components/ui/skeleton";
import CourseCard from "@/components/course-card/course-card";
import { useCoursesContext } from "../../_contexts/courses-provider";

const Courses = () => {
  const { loading, courses, search, setSearch, setSort, setLimit } =
    useCoursesContext();

  useEffect(() => {
    setLimit(12);
  }, [setLimit]);

  return (
    <section>
      <div className="mb-8 flex max-sm:flex-wrap sm:justify-between items-center gap-2">
        <SearchBar search={search} setSearch={setSearch} />
        <SortDropdown setSort={setSort} />
      </div>

      <div
        className={`grid ${
          courses.length === 0
            ? "place-items-center"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        } gap-4 md:gap-6 `}
      >
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => {
            return <Skeleton key={index + 1} className="h-[250px]" />;
          })
        ) : courses.length === 0 ? (
          <div className="mt-12 grid place-items-center">
            <p className="text-2xl font-bold">No courses found</p>
          </div>
        ) : (
          courses.map((course) => {
            return (
              <CourseCard
                key={course.topic.toLowerCase().replace(" ", "-")}
                course={course}
              />
            );
          })
        )}
      </div>
      {/* <PaginationComponent offset={offset} setOffset={setOffset} /> */}
    </section>
  );
};

export default Courses;
