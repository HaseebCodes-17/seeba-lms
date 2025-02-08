import {
  FlashCardsAiModel,
  NotesAiModel,
  QuizesAiModel,
} from "@/config/AiModel";
import { prisma } from "@/lib/prisma";
import { ApiError, ApiResponse } from "@/utils/ApiHandler";

// Generate Course Material
export async function PATCH(request: Request) {
  try {
    const { courseId, courseType, title, description, chapters } =
      await request.json();

    if (courseType === "notes") {
      const generatedNotes = [];

      for (const chapter of chapters) {
        const PROMPT = `Generate detailed notes for this topic (${JSON.stringify(
          chapter
        )}) . All result in html tags but make sure to not including the any meta tag.Also apply suitable tailwind classes to describe notes clearly.`;
        const aiResponse = await NotesAiModel.sendMessage(PROMPT);

        generatedNotes.push(JSON.parse(aiResponse.response.text()));
      }

      const updatedCourseMaterial = await prisma.courseMaterial.update({
        where: { courseId },
        data: {
          notes: generatedNotes,
        },
      });

      return ApiResponse(
        200,
        "Course material generated successfully",
        updatedCourseMaterial
      );
    } else if (courseType === "flashCards") {
      const PROMPT = `Generate at least 15 flash cards for this topic (\nTitle: \n"${title}",\nDescription:\n"${description}").Back side should not be much longer.All result in JSON.`;
      const aiResponse = await FlashCardsAiModel.sendMessage(PROMPT);

      const updatedCourseMaterial = await prisma.courseMaterial.update({
        where: { courseId },
        data: {
          flashCards: JSON.parse(aiResponse.response.text()),
        },
      });

      return ApiResponse(
        200,
        "Course material generated successfully",
        updatedCourseMaterial
      );
    } else if (courseType === "quizes") {
      const PROMPT = `Generate at lest 12 quizes for this topic (Title: ${title}, Description: ${description}).All result in JSON.`;
      const aiResponse = await QuizesAiModel.sendMessage(PROMPT);

      const updatedCourseMaterial = await prisma.courseMaterial.update({
        where: { courseId },
        data: {
          quizes: JSON.parse(aiResponse.response.text()),
        },
      });

      return ApiResponse(
        200,
        "Course material generated successfully",
        updatedCourseMaterial
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse(
        500,
        "Something went wrong while generating course material",
        error
      );
    }
  }
}

// Get Course Material
export async function GET(request: Request) {
  try {
    const courseId = new URL(request.url).searchParams.get("courseId");
    if (!courseId) return ApiError(404, "Course Id is required");

    const courseMaterial = await prisma.courseMaterial.findUnique({
      where: { courseId },
    });
    if (!courseMaterial) return ApiError(404, "Course Material not found");

    return ApiResponse(
      200,
      "Course Material fetched successfully",
      courseMaterial
    );
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse(
        500,
        "Something went wrong while fetching course material",
        error.message
      );
    }
  }
}
