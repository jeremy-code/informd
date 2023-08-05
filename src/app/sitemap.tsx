import { MetadataRoute } from "next";

const Sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://informd.news/",
      lastModified: new Date(),
    },
  ];
};

export default Sitemap;
