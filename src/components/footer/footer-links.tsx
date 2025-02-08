import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const FooterLinks = () => {
  const links = [
    {
      icon: FaFacebookF,
      path: "https://www.facebook.com/people/Haseeb-Ahmad/pfbid02ZHJyxrurYNaCZ8eL2Y4pweqts2PASNaxhp8jbo9sryaAS2HJ6baMLE5dgnwhd4BHl/",
      bgColor: "bg-blue-600",
    },
    {
      icon: FiInstagram,
      path: "https://www.instagram.com/haseeb_ahmad_47/",
      bgColor: "bg-red-600",
    },
    {
      icon: FaTiktok,
      path: "https://www.tiktok.com/@haseeb_ahmad_17",
      bgColor: "bg-zinc-800",
    },
  ];

  return (
    <div className="flex gap-2">
      {links.map(({ icon: Icon, path, bgColor }, index) => {
        return (
          <Link key={index} href={path} target="_blank">
            <Icon className={`text-xl text-white ${bgColor} rounded-md`} />
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
