"use client";

import React, { useState } from "react";
import Logo from "@/components/logo";
import Menu from "./menu";
import AuthBtns from "@/components/auth-btns";
import DashboardBtn from "./dashboard-btn";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto py-4 max-sm:p-3 flex justify-between items-center">
        {/* Logo */}
        <Logo className="max-[350px]:text-3xl" />

        {/* Menu & Buttons */}
        <div className="hidden md:flex items-center gap-10">
          <Menu />
          <div className="flex items-center gap-4">
            <AuthBtns />
            <DashboardBtn />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex gap-2">
          <AuthBtns />
          <MenuToggle />
        </div>
      </div>
    </nav>
  );
};

// Mobile Menu Toggle Component
const MenuToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-600 hover:text-blue-800 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md">
          <Menu isMobile setIsOpen={setIsOpen} />
          <div className="flex flex-col gap-4 p-4">
            <DashboardBtn />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
