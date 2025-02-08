import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortDropdown = ({ setSort }: { setSort: (sort: string) => void }) => {
  const options = [
    { label: "Newest", value: "desc" },
    { label: "Oldest", value: "asc" },
  ];

  return (
    <Select onValueChange={(value) => setSort(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ label, value }) => {
          return (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SortDropdown;
