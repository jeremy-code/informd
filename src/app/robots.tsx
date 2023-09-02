import { MetadataRoute } from "next";

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://evolve.news/sitemap.xml",
  };
};

export default Robots;
