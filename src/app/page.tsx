import Link from "next/link";

import { LandingNavbar } from "@/components/Navbar";

const LandingPage = async () => {
  return (
    <>
      <LandingNavbar />
      Landing Page
      <Link href="/news">News</Link>
    </>
  );
};

export default LandingPage;
