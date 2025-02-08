import { CourseOutlineAiModel } from "@/config/AiModel";
import { prisma } from "@/lib/prisma";
import { ApiError, ApiResponse } from "@/utils/ApiHandler";
import { currentUser } from "@clerk/nextjs/server";

// Generate Course Outline
export async function POST(request: Request) {
  try {
    const { purpose, topic, difficultyLevel, email } = await request.json();

    const PROPMT = `Generate a course for the purpose of ${purpose} of topic ${topic} with the difficulty level ${difficultyLevel}.The course should include title, description, an image related to course and chapters along with their title, description, emoji (The emoji should relate by each chapter), summary and topics.All result in JSON.`;
    const aiResponse = await CourseOutlineAiModel.sendMessage(PROPMT);

    const createdCourse = await prisma.course.create({
      data: {
        createdBy: email,
        purpose,
        topic,
        difficultyLevel,
        courseOutline: JSON.parse(aiResponse.response.text()),
      },
    });

    if (createdCourse) {
      const createdCourseMaterial = await prisma.courseMaterial.create({
        data: {
          courseId: createdCourse.id,
          createdBy: email,
          notes: [],
          flashCards: [],
          quizes: [],
        },
      });

      return ApiResponse(
        201,
        "Course generated successfully",
        createdCourseMaterial
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return ApiResponse(
        500,
        "Something went wrong while generating course",
        error.message
      );
    }
  }
}

// Get Courses
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "desc";
    const limit = parseInt(searchParams.get("limit") || "12");
    const offset = parseInt(searchParams.get("offset") || "0");
    const user = await currentUser();
    const email = user?.emailAddresses[0]?.emailAddress;

    if (id) {
      const course = await prisma.course.findFirst({ where: { id } });
      if (!course) return ApiError(404, "Course Not Found");

      return ApiResponse(200, "Course fetched successfully", course);
    }

    const courses = await prisma.course.findMany({
      where: {
        createdBy: email,
        OR: [
          { purpose: { contains: search, mode: "insensitive" } },
          { topic: { contains: search, mode: "insensitive" } },
        ],
      },
      orderBy: { createdAt: sort === "asc" ? "asc" : "desc" },
      skip: offset,
      take: limit,
    });
    if (!courses) return ApiError(404, "Courses Not Found");

    return ApiResponse(200, "Courses fetched successfully", courses);
  } catch (error) {
    if (error instanceof Error) {
      return ApiError(
        500,
        "Something went wrong while fetching courses",
        error.message
      );
    }
  }
}

// Delete Course
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return ApiError(400, "Course ID is required");

    await prisma.course.delete({ where: { id } });
    await prisma.courseMaterial.delete({ where: { courseId: id } });

    return ApiResponse(200, "Course deleted successfully");
  } catch (error) {
    if (error instanceof Error) {
      return ApiError(
        500,
        "Something went wrong while deleting course",
        error.message
      );
    }
  }
}
