import { MetadataRoute } from "next";

const Sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://evolve.news/",
      lastModified: new Date(),
    },
  ];
};

export default Sitemap;
