"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Card, CardFooter, Image } from "@nextui-org/react";

import type { Article as ArticleProps } from "@/types";
import { Timestamp } from "../Misc";

const Article = ({ title, content, source, publishedAt, urlToImage }: ArticleProps) => {
  const router = useRouter();

  const handleCardPress = useCallback(() => {
    router.push(`/news/${encodeURIComponent(title)}`);
  }, [router, title]);

  return (
    <Card isFooterBlurred isPressable className="group h-[300px]" onPress={handleCardPress}>
      <Image className="z-0 object-cover" src={urlToImage} alt={title} />
      <CardFooter className="absolute bottom-0 h-28 flex-col items-start border-t-1 border-gray-700/50 bg-black/30 text-start transition-all duration-500 ease-in-out group-hover:h-full group-hover:border-t-0">
        {/* Article Title */}
        <h2 className="line-clamp-2 text-lg font-bold" title={title}>
          {title}
        </h2>

        {/* Article Source and Timestamp */}
        <p className="text-tiny text-white/60">
          {source.name} -
          <Timestamp date={publishedAt} text="published" className="ml-1" />
        </p>

        {/* Article Content (only shown on hover) */}
        <p className="hidden group-hover:my-auto group-hover:block">{content}</p>
      </CardFooter>
    </Card>
  );
};

export default Article;
