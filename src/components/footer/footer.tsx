import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLinks from "./footer-links";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-y">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <Image src="/logo.png" height={40} width={40} alt="Logo" />
        </Link>
        <p className="text-sm text-gray-500 text-center sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} <Link href="/">SeebaLMS</Link> —
          <a
            href="mailto:haseebahm76.a@gmail.com"
            className="text-gray-600 ml-1"
          >
            haseebahm76.a@gmail.com
          </a>
        </p>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
