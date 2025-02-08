"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  const { user } = useUser();

  return (
    <header className="p-4 md:p-6 bg-gradient-to-r from-blue-500 to-blue-600 flex max-sm:flex-wrap gap-4 sm:gap-6 md:gap-8 rounded-xl">
      <Image
        className="max-sm:m-auto"
        src="/dashboard-header.png"
        height={100}
        width={100}
        alt="Dashboard Hero Image"
      />
      <div className="max-sm:flex-wrap">
        <h2 className="text-4xl text-zinc-100 font-bold mb-1">
          Welcome Back, {user?.username}
        </h2>
        <p className="text-lg text-zinc-200">
          Manage your courses, track your progress, and access all your teaching
          materials in one place. Create new courses and engage with your
          students effectively.
        </p>
      </div>
    </header>
  );
};

export default Header;
