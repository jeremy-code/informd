"use client";

import { Fetcher } from "swr";
import useSWRInfinite from "swr/infinite";

import { NewsApiParams, NewsApiResponse } from "@/types";
import { env } from "@/utils";

const API_URL = "https://newsdata.io/api/1/news";

const fetcher: Fetcher<
  NewsApiResponse,
  { url: RequestInfo | URL; args: Record<string, string> }
> = ({ url, args }) => {
  const searchParams = new URLSearchParams({
    ...args,
    apikey: env.NEWS_API_KEY || "",
  });

  return fetch(`${url}?${searchParams}`).then((res) => res.json());
};

const useNews = (params: NewsApiParams) => {
  return useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.articles.length) return null;

      return [
        API_URL,
        {
          ...params,
          page: (index + 1).toString(),
        },
      ];
    },
    fetcher,
    { suspense: true }
  );
};

export default useNews;
