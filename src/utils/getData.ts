import { headers } from "next/headers";

import { NewsResponse } from "@/types";

const API_URL = "https://newsapi.org/v2/";

type Endpoint = "top-headlines" | "everything";

export const getData = async (
  endpoint: Endpoint,
  params: Record<string, string>
): Promise<NewsResponse> => {
  const API_KEY = process.env.NEWS_API_KEY;
  if (!API_KEY) throw new Error("API_KEY is not defined");

  const res = await fetch(`${API_URL}/${endpoint}?${new URLSearchParams(params)}`, {
    headers: {
      "x-api-key": API_KEY,
    },
    // revalidate every 15 minutes
    next: { revalidate: 900 },
  });

  if (!res.ok) throw new Error("API request failed");

  return res.json();
};
