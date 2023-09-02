import { useEffect } from "react";

import { Article, FeaturedArticle } from "@/components/Article";
import { NewsFeedNavbar } from "@/components/Navbar";
import { getNews } from "@/utils";

const NewsFeed = async () => {
  const { articles } = await getNews("top-headlines", {
    country: "us",
  });

  console.log(articles);

  return (
    <>
      <NewsFeedNavbar />
      <main className="flex flex-col gap-6 p-6">
        <FeaturedArticle key={articles[0].url} {...articles[0]} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {articles.slice(1).map((article) => (
            <Article key={article.url} {...article} />
          ))}
        </div>
      </main>
    </>
  );
};

export default NewsFeed;
