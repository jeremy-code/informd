"use client";

import { Suspense, useEffect } from "react";

import { Article, FeaturedArticle } from "@/components/Article";
import { NewsFeedNavbar } from "@/components/Navbar";
import { useNews } from "@/hooks";

const NewsFeed = () => {
  const { data, error, isLoading, isValidating, mutate, size, setSize } = useNews({
    q: "tesla",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <NewsFeedNavbar />
      {/* <main className="flex flex-col gap-6 p-6">
        <FeaturedArticle key={articles[0].url} {...articles[0]} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {articles.slice(1).map((article) => (
            <Article key={article.url} {...article} />
          ))}
        </div>
      </main> */}
    </>
  );
};

const NewsFeedPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsFeed />
    </Suspense>
  );
};

export default NewsFeedPage;
