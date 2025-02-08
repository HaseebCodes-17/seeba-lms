import React from "react";
import Logo from "@/components/logo";
import AuthBtns from "@/components/auth-btns";

const Navbar = () => {
  return (
    <nav className="bg-white p-3 flex justify-between items-center shadow sticky top-0 z-50">
      <Logo className="text-3xl" size={40} />
      <AuthBtns />
    </nav>
  );
};

export default Navbar;
