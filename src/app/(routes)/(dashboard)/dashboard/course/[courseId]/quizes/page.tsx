"use client";

import React, { useEffect, useState } from "react";
import useCourseMaterial from "@/hooks/use-course-material";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ApiLoader from "@/components/loaders/api-loader/api-loader";

interface Question {
  question: string;
  answer: string;
  options: string[];
}

interface Quiz {
  quizId: number;
  title: string;
  description: string;
  questions: Question[];
}

const QuizesPage = () => {
  const { loading, materialData } = useCourseMaterial();
  const [quizCount, setQuizCount] = useState(1);
  const [quizes, setQuizes] = useState<Quiz[]>([]);
  const [activeQuestion, setActiveQuestion] = useState<{
    questionIndex: number | null;
    selectedOption: string | null;
  }>({ questionIndex: null, selectedOption: null });

  useEffect(() => {
    setQuizes(materialData.quizes);
  }, [materialData]);

  const handlePrev = () => {
    setQuizCount(quizCount - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveQuestion({ questionIndex: null, selectedOption: null });
  };

  const handleNext = () => {
    setQuizCount(quizCount + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveQuestion({ questionIndex: null, selectedOption: null });
  };

  return (
    <section>
      <h2 className="text-4xl text-center mb-4">Quizes</h2>
      <div className="flex items-center gap-2">
        {quizCount !== 1 && <Button onClick={handlePrev}>Prev</Button>}
        <div className="flex w-full gap-2">
          {loading
            ? Array.from({ length: 12 }).map((_, index) => {
                return <Skeleton key={index + 1} className="h-2 w-full" />;
              })
            : quizes.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`h-2 w-full ${
                      index < quizCount ? "bg-blue-600" : "bg-zinc-100"
                    } rounded cursor-pointer`}
                    onClick={() => {
                      setQuizCount(index + 1);
                      setActiveQuestion({
                        questionIndex: null,
                        selectedOption: null,
                      });
                    }}
                  />
                );
              })}
        </div>
        {quizCount !== quizes.length && (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>

      <div className="mt-4">
        {loading ? (
          <ApiLoader />
        ) : (
          <>
            <span className="text-zinc-600">
              Quiz: {quizes[quizCount - 1]?.quizId}
            </span>
            <h3 className="text-2xl text-zinc-800 text-center font-semibold mb-1">
              {quizes[quizCount - 1]?.title}
            </h3>
            <p className="text-zinc-500 text-center mb-4">
              {quizes[quizCount - 1]?.description}
            </p>

            {quizes[quizCount - 1]?.questions.map((question, index) => {
              const isActive = activeQuestion.questionIndex === index;

              return (
                <div key={index} className="mb-6">
                  <span className="text-zinc-600">
                    Question No: {index + 1}
                  </span>
                  <h4 className="font-bold mb-2">{question.question}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {question.options.map((option, optionIndex) => {
                      return (
                        <h5
                          key={optionIndex}
                          className="bg-gray-100 p-4 rounded-xl cursor-pointer hover:shadow-md transition-all"
                          onClick={() =>
                            setActiveQuestion({
                              questionIndex: index,
                              selectedOption: option,
                            })
                          }
                        >
                          {option}
                        </h5>
                      );
                    })}
                  </div>
                  {isActive && (
                    <h6
                      className={`text-center p-4 mt-4 ${
                        activeQuestion.selectedOption === question.answer
                          ? "text-green-800 bg-green-300 rounded-lg"
                          : "text-red-700 bg-red-300"
                      } w-[200px] m-auto`}
                    >
                      {activeQuestion.selectedOption === question.answer
                        ? "Correct"
                        : "Wrong"}
                    </h6>
                  )}
                </div>
              );
            })}
            {quizCount !== quizes.length && (
              <div className="flex justify-end gap-2 mt-4">
                {quizCount !== 1 && <Button onClick={handlePrev}>Prev</Button>}
                {quizCount !== quizes.length && (
                  <Button onClick={handleNext}>Next</Button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default QuizesPage;
