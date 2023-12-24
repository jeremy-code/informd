"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { parseNews } from "@/utils";

const NewsArticle = () => {
  const [article, setArticle] = useState<any>(null);
  const searchParams = useSearchParams();
  const url = searchParams.get("url") ?? "";

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await parseNews(url);
      setArticle(article);
    };

    fetchArticle();
  }, [url]);

  return (
    <div>
      {url}
      <div dangerouslySetInnerHTML={{ __html: article?.content }} />
    </div>
  );
};

export default NewsArticle;
