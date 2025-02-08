import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Logo = ({
  size = 50,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <h1 className={cn("text-4xl font-bold tracking-tighter", className)}>
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={size} height={size} />
        SeebaLMS
      </Link>
    </h1>
  );
};

export default Logo;
