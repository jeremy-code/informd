import useSWR, { Fetcher } from "swr";

import type { NewsAPIParams, NewsResponse } from "@/types";

const fetcher: Fetcher<NewsResponse, { url: RequestInfo | URL; args: Record<string, string> }> = ({
  url,
  args,
}) => fetch(`${url}?${new URLSearchParams(args)}`).then((res) => res.json());

const useNews = (endpoint: "everything" | "top-headlines", params: NewsAPIParams) => {
  return useSWR(
    {
      url: `/api/news/${endpoint}`,
      args: params as Record<string, string>,
    },
    fetcher,
    { suspense: true }
  );
};

export default useNews;
