import React, { ReactNode } from "react";
import { ClerkLoading, ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import AuthLoader from "@/components/loaders/auth-loader/auth-loader";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <ClerkLoading>
        <AuthLoader />
      </ClerkLoading>

      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
};

export default AuthProvider;
