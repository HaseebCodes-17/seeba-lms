import { Button } from "@/components/ui/button";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const DashboardBtn = () => {
  return (
    <SignedIn>
      <Button asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </SignedIn>
  );
};

export default DashboardBtn;
