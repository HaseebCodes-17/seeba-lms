import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseDetailsProps {
  setTopic: (value: string) => void;
  setDifficultyLevel: (value: string) => void;
}

const CourseDetails = ({
  setTopic,
  setDifficultyLevel,
}: CourseDetailsProps) => {
  const levels = ["Easy", "Medium", "Hard", "Expert"];

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="topic">Course Topic</Label>
        <Textarea
          id="topic"
          className="h-24"
          placeholder="Enter Course Topic"
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="difficulty">Difficulty Level</Label>
        <Select onValueChange={(value) => setDifficultyLevel(value)}>
          <SelectTrigger id="difficulty">
            <SelectValue placeholder="Select course difficulty level" />
          </SelectTrigger>
          <SelectContent>
            {levels.map((level) => {
              return (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CourseDetails;
