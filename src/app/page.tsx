import React from "react";

import { Article } from "@/components/Article";
import { Navbar } from "@/components/Navbar";
import { getData } from "@/utils";

const Home = async () => {
  const { articles } = await getData("top-headlines", {
    country: "us",
  });

  return (
    <>
      <Navbar />
      <main className="px-2 container mx-auto">
        {articles.map((article) => (
          <Article key={article.url} {...article} />
        ))}
      </main>
    </>
  );
};

export default Home;
