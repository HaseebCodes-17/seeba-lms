"use client";

import React, { useEffect, useState } from "react";
import useCourseMaterial from "@/hooks/use-course-material";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ReactFlipCard from "reactjs-flip-card";
import ApiLoader from "@/components/loaders/api-loader/api-loader";

interface FlashCards {
  front: string;
  back: string;
}

const FlashCardsPage = () => {
  const { loading, materialData } = useCourseMaterial();
  const [flashCardCount, setFlashCardCount] = useState(1);
  const [flashCards, setFlashCards] = useState<FlashCards[]>([]);

  useEffect(() => {
    setFlashCards(materialData.flashCards);
  }, [materialData]);

  const cardClasses = "p-4 md:p-6 lg:p-8 rounded-xl";

  return (
    <section>
      <h2 className="text-4xl text-center font-bold mb-6 md:mb-8 lg:mb-10">
        Flash Cards
      </h2>
      <div className="flex items-center gap-2">
        {flashCardCount !== 1 && (
          <Button onClick={() => setFlashCardCount(flashCardCount - 1)}>
            Prev
          </Button>
        )}
        <div className="flex w-full gap-2">
          {loading
            ? Array.from({ length: 15 }).map((_, index) => {
                return <Skeleton key={index + 1} className="h-2 w-full" />;
              })
            : materialData.flashCards.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`h-2 w-full ${
                      index < flashCardCount ? "bg-blue-600" : "bg-zinc-100"
                    } rounded cursor-pointer`}
                    onClick={() => setFlashCardCount(index + 1)}
                  />
                );
              })}
        </div>
        {flashCardCount !== materialData.flashCards.length && (
          <Button onClick={() => setFlashCardCount(flashCardCount + 1)}>
            Next
          </Button>
        )}
      </div>

      <div className="mt-10 md:mt-16">
        {loading ? (
          <ApiLoader />
        ) : (
          <ReactFlipCard
            containerCss="text-xl text-white text-center font-semibold max-[350px]:w-[300px] w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto m-auto grid place-items-center"
            direction="vertical"
            frontComponent={
              <div className={`bg-blue-500 ${cardClasses}`}>
                {flashCards[flashCardCount - 1]?.front}
              </div>
            }
            backComponent={
              <div className={`bg-red-600 ${cardClasses}`}>
                {flashCards[flashCardCount - 1]?.back}
              </div>
            }
          />
        )}
      </div>
    </section>
  );
};

export default FlashCardsPage;
