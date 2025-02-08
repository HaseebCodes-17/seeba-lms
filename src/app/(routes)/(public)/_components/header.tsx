"use client";

import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className="container px-2 py-12 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
      <div className="max-md:order-1">
        <p className="text-3xl md:text-4xl  text-zinc-800 max-md:text-center font-semibold tracking-tight mb-6">
          Empower your learning journey with our AI-powered LMS platform.
          Experience personalized education that adapts to your unique needs and
          goals.
        </p>
        <div className="flex max-md:justify-center gap-2">
          <Button asChild>
            <Link href={`/${userId ? "dashboard" : "sign-in"}`}>
              Start Learning
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
      <div className="bg-[url('/home-header.jpg')] h-[400px] bg-contain bg-right max-md:bg-center bg-no-repeat" />
    </header>
  );
};

export default Header;
