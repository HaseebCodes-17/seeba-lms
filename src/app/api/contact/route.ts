import { prisma } from "@/lib/prisma";
import { ApiError, ApiResponse } from "@/utils/ApiHandler";

// Submit contact form
export async function POST(request: Request) {
  try {
    const { email, phone, message } = await request.json();

    const contact = await prisma.contact.create({
      data: { email, phone, message },
    });

    return ApiResponse(201, "Contact form submitted", contact);
  } catch (error) {
    if (error instanceof Error) {
      return ApiError(
        500,
        "Something went wrong while submitting",
        error.message
      );
    }
  }
}
