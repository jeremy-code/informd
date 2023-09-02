import Image from "next/image";
import Link from "next/link";
import {
  NavbarBrand,
  Navbar as NextNavbar,
  NavbarProps as NextNavbarProps,
} from "@nextui-org/navbar";

import { logo } from "@/assets";

type NavbarProps = {
  variant?: "default" | "logoless";
} & NextNavbarProps;

const Navbar = ({ children, variant = "default", classNames, ...props }: NavbarProps) => {
  return (
    <NextNavbar
      // Adds primary-colored bottom border when active
      // merge classNames
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
        ...classNames,
      }}
      {...props}
    >
      {variant === "default" && (
        <NavbarBrand as={Link} href="/">
          <Image src={logo} alt="evolve logo" width={30} height={30} />
          <span className="ml-4 text-lg font-bold">evolve</span>
        </NavbarBrand>
      )}
      {children}
    </NextNavbar>
  );
};

export default Navbar;
