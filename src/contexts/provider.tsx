"use client";

import React, { ReactNode, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import AuthLoader from "@/components/loaders/auth-loader/auth-loader";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";

const Provider = ({ children }: { children: ReactNode }) => {
  const { isLoaded, user } = useUser();

  useEffect(() => {
    const handleUser = async () => {
      await axios.post("/api/user", { user });
      await axios.patch("/api/user", { user });
    };

    if (user) {
      handleUser();
    }
  }, [user]);

  return !isLoaded ? (
    <AuthLoader />
  ) : (
    <>
      <NextTopLoader showSpinner={false} />
      {children}
      <Toaster />
    </>
  );
};

export default Provider;
