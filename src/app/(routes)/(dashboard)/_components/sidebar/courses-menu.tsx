"use client";

import React from "react";
import { useCoursesContext } from "../../_contexts/courses-provider";
import { useParams } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { BookOpen, ChevronDown } from "lucide-react";
import Link from "next/link";

const CoursesMenu = () => {
  const { loading, courses } = useCoursesContext();
  const { courseId } = useParams();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <BookOpen />
                  <span>Courses</span>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {loading ? (
                    Array.from({ length: 5 }).map((_, index) => {
                      return <SidebarMenuSkeleton key={index + 1} />;
                    })
                  ) : courses.length === 0 ? (
                    <SidebarMenuSubItem>No Courses Found.</SidebarMenuSubItem>
                  ) : (
                    courses.map((course) => {
                      const URL = `/dashboard/course/${course.id}`;
                      return (
                        <SidebarMenuSubItem
                          key={course.courseOutline.course.title
                            .toLowerCase()
                            .replace(" ", "-")}
                          className={`${
                            URL.includes(courseId as string) &&
                            "bg-sidebar-accent"
                          } hover:bg-sidebar-accent line-clamp-1`}
                        >
                          <Link href={URL}>
                            {course.courseOutline.course.title}
                          </Link>
                        </SidebarMenuSubItem>
                      );
                    })
                  )}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default CoursesMenu;
