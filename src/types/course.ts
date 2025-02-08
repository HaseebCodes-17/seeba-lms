export interface Course {
  id: string;
  purpose: string;
  topic: string;
  difficultyLevel: string;
  courseOutline: CourseOutline;
}

export interface CourseOutline {
  course: {
    title: string;
    description: string;
    image: string;
    chapters: Chapter[];
  };
}

export interface Chapter {
  title: string;
  description: string;
  emoji: string;
  summary: string;
  topics: string[];
}
