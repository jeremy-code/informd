"use client";

import { usePathname } from "next/navigation";
import { Button, Link, NavbarItem, NavbarItemProps } from "@nextui-org/react";

type NavlinkProps = {
  href: string;
  label: string;
  variant?: "link" | "button";
} & NavbarItemProps;

const Navlink = ({ href, label, variant = "link", ...props }: NavlinkProps) => {
  const active = usePathname() === href;

  return (
    <NavbarItem isActive={active} {...props}>
      <Link
        href={href}
        color={active ? "primary" : "foreground"}
        aria-current={active ? "page" : undefined}
      >
        {variant === "button" ? <Button>{label}</Button> : label}
      </Link>
    </NavbarItem>
  );
};

export default Navlink;
