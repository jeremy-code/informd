import React from "react";
import Image from "next/image";
import Link from "next/link";

import { logo } from "@/assets";

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem = ({ href, label }: NavItemProps) => (
  <Link href={href} className="text-gray-700 hover:text-gray-900 px-4">
    {label}
  </Link>
);

const Navbar = () => {
  return (
    <header className="py-6 bg-white mb-3">
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="informd logo" width={30} height={30} />
            <span className="font-bold text-gray-800 ml-4 text-lg">informd</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          <NavItem href="/stories" label="Stories" />
          <NavItem href="/creator" label="Creator" />
          <NavItem href="/community" label="Community" />
          <NavItem href="/subscribe" label="Subscribe" />
        </div>
        <div className="lg:hidden flex items-center">
          <button className="text-gray-700 px-4">Login</button>
        </div>
        <div className="lg:flex space-x-4 hidden">
          <button className="text-gray-700 px-4">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
