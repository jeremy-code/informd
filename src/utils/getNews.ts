"use server";

import { Article, NewsResponse } from "@/types";

const API_URL = "https://newsapi.org/v2";
const API_KEY = process.env.NEWS_API_KEY;

type Endpoint = "top-headlines" | "everything";

// Utility function to transform an article
const transformArticle = (article: Article): Article => ({
  ...article,
  title: article.title?.split(" - ")[0],
  publishedAt: new Date(article.publishedAt),
});

export const getNews = async (
  endpoint: Endpoint,
  params: Record<string, string>
): Promise<NewsResponse> => {
  if (!API_KEY) throw new Error("API_KEY is not defined");

  const res = await fetch(`${API_URL}/${endpoint}?${new URLSearchParams(params)}`, {
    headers: {
      "x-api-key": API_KEY,
    },
    // revalidate every 15 minutes
    next: { revalidate: 900 },
  });

  if (!res.ok) throw new Error("API request failed");

  const data: NewsResponse = await res.json();

  const transformedArticles = data.articles
    .filter((a) => a.url && a.urlToImage)
    .map(transformArticle);

  return {
    ...data,
    articles: transformedArticles,
  };
};
