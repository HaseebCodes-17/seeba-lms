"use client";

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useCoursesContext } from "../../_contexts/courses-provider";

const DashboardInfo = () => {
  const { courses } = useCoursesContext();

  return (
    <Drawer>
      <DrawerTrigger className="hover:underline">Dashboard Info</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Details of your dashboard</DrawerTitle>
          <DrawerDescription>
            This is the information about your dashboard and your courses
            information.
          </DrawerDescription>
          <div>
            <h4 className="text-2xl text-zinc-800">
              <span className="font-bold">Total Courses: </span>
              {courses.length}
            </h4>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DashboardInfo;
