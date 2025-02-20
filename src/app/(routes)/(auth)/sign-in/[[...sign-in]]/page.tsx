import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Login - SeebaLMS",
  description: "Login to SeebaLMS",
};

export default function Page() {
  return <SignIn />;
}
