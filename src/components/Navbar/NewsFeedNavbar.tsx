import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/input";
import { NavbarContent } from "@nextui-org/navbar";

import { Navbar, Navlink } from "@/components/Navbar";

const NewsFeedNavbar = () => {
  return (
    <>
      <Navbar>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center"></NavbarContent>
        <NavbarContent className="hidden flex-grow gap-4 sm:flex" justify="center">
          <Input
            classNames={{
              base: "w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon className="h-6 w-6" />}
            type="search"
          />
        </NavbarContent>
        <NavbarContent justify="end">
          <Navlink href="/login" label="Login" className="hidden lg:flex" />
          <Navlink href="/signup" label="Sign Up" variant="button" />
        </NavbarContent>
      </Navbar>
      <Navbar
        isBordered
        height="3rem"
        variant="logoless"
        position="static"
        classNames={{
          content: "mx-auto gap-8",
        }}
      >
        <NavbarContent justify="center">
          <Navlink href="/news" label="Home" />
          <Navlink href="/news/united-states" label="U.S." />
          <Navlink href="/news/world" label="World" />
          <Navlink href="/news/business" label="Business" />
          <Navlink href="/news/technology" label="Technology" />
          <Navlink href="/news/entertainment" label="Entertainment" />
          <Navlink href="/news/sports" label="Sports" />
          <Navlink href="/news/science" label="Science" />
          <Navlink href="/news/health" label="Health" />
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NewsFeedNavbar;
