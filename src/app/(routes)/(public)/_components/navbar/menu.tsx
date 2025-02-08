"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MenuProps {
  setIsOpen?: (isOpen: boolean) => void;
  isMobile?: boolean;
}

const Menu: React.FC<MenuProps> = ({ setIsOpen, isMobile = false }) => {
  const pathname = usePathname();
  const navLinks = ["Home", "Services", "Contact"];

  return (
    <ul className={`flex ${isMobile ? "flex-col gap-4 p-4" : "gap-6"}`}>
      {navLinks.map((navLink) => {
        const name = navLink.toLowerCase().replace(" ", "-");
        const URL = name === "home" ? "/" : `/${name}`;

        return (
          <li
            key={name}
            className={`${
              pathname === URL
                ? "text-blue-600 font-semibold"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            <Link href={URL} onClick={() => setIsOpen?.(false)}>
              {navLink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
