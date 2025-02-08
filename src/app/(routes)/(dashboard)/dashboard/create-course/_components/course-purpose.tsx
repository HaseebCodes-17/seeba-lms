"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const CoursePurpose = ({
  setPurpose,
}: {
  setPurpose: (value: string) => void;
}) => {
  const [selected, setSelected] = useState("");

  const options = [
    "Coding Prep",
    "Interview Prep",
    "Career Prep",
    "Exams Prep",
    "Basic Programming",
    "Hardcore Knowledge",
    "AI",
    "Hobby",
    "Fun",
    "Other",
  ];

  return (
    <div>
      <Label className="text-xl mb-2 block">Select Course Purpose</Label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {options.map((option) => {
          const value = option.toLowerCase().replace(" ", "-");

          return (
            <div
              key={value}
              className={`p-2 sm:p-4 ${
                selected === value && "border border-blue-600"
              } border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
              onClick={() => {
                setSelected(value);
                setPurpose(option);
              }}
            >
              <Image
                className="mb-1 m-auto select-none"
                src={`/course-purpose/${value}.png`}
                alt={option}
                width={100}
                height={100}
              />
              <h4 className="text-center text-md font-semibold">{option}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursePurpose;
