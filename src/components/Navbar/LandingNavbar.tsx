import { NavbarContent } from "@nextui-org/navbar";

import { Navbar, Navlink } from "@/components/Navbar";

const LandingNavbar = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <Navlink href="/" label="Home" />
        <Navlink href="/news" label="Explore" />
      </NavbarContent>
      <NavbarContent justify="end">
        <Navlink href="/login" label="Login" className="hidden lg:flex" />
        <Navlink href="/signup" label="Sign Up" variant="button" />
      </NavbarContent>
    </Navbar>
  );
};

export default LandingNavbar;
