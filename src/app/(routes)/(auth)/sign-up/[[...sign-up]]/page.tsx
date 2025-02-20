import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Signup - SeebaLMS",
  description: "Signup to SeebaLMS",
};

export default function Page() {
  return <SignUp />;
}
