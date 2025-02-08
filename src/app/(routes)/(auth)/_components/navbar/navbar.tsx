import AuthBtns from "@/components/auth-btns";
import Logo from "@/components/logo";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 sm:p-6 flex justify-between items-center">
      <Logo />
      <AuthBtns />
    </nav>
  );
};

export default Navbar;
