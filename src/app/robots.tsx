import { MetadataRoute } from "next";

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://informd.news/sitemap.xml",
  };
};

export default Robots;
