import { prisma } from "@/lib/prisma";
import { ApiError, ApiResponse } from "@/utils/ApiHandler";
import { currentUser } from "@clerk/nextjs/server";

// Create User
export async function POST(request: Request) {
  try {
    const { user } = await request.json();
    const { id, username, primaryEmailAddress } = user;
    const email = primaryEmailAddress.emailAddress;

    const existedUser = await prisma.user.findUnique({
      where: { clerkId: id },
    });
    if (existedUser) return ApiError(404, "User already exists");

    const createdUser = await prisma.user.create({
      data: { clerkId: id, username, email },
    });

    return ApiResponse(201, "User created successfully", createdUser);
  } catch (error) {
    return ApiResponse(500, "Something went wrong while creating user", error);
  }
}

// Update User
export async function PATCH(request: Request) {
  try {
    const { user } = await request.json();
    const { id, username, primaryEmailAddress } = user;
    const email = primaryEmailAddress.emailAddress;

    const existedUser = await prisma.user.findUnique({
      where: { clerkId: id },
    });
    if (!existedUser) return ApiError(404, "User not found");

    const updatedUser = await prisma.user.update({
      where: { clerkId: id },
      data: { username, email },
    });

    return ApiResponse(200, "User updated successfully", updatedUser);
  } catch (error) {
    return ApiResponse(500, "Something went wrong while updating user", error);
  }
}

// Get User
export async function GET() {
  try {
    const user = await currentUser();

    const signedInUser = await prisma.user.findUnique({
      where: { clerkId: user?.id },
    });

    if (signedInUser) {
      return ApiError(400, "User fetched successfully", signedInUser);
    }
  } catch (error) {
    return ApiResponse(500, "Something went wrong while getting user", error);
  }
}
