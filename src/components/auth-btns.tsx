"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UserPlus2 } from "lucide-react";
import Link from "next/link";

const AuthBtns = () => {
  const pathname = usePathname();

  const links = [
    { label: "Login", path: "sign-in" },
    { label: "Sign-up", path: "sign-up" },
  ];

  return (
    <>
      <SignedOut>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
              <UserPlus2 />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {links.map(({ label, path }) => {
              const URL = `/${path}`;

              return (
                <DropdownMenuItem
                  key={path}
                  className={`${
                    pathname === URL && "bg-gray-100"
                  } cursor-pointer`}
                  asChild
                >
                  <Link href={URL}>{label}</Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default AuthBtns;
