import Image from "next/image";

import type { Article as ArticleProps } from "@/types";
import { relativeDate } from "@/utils";

const Article = (props: ArticleProps) => {
  const { title, description, source, publishedAt, urlToImage } = props;

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div>
        <Image className="rounded-lg" src={urlToImage} width={1000} height={500} alt={title} />
      </div>
      <div className="self-center">
        <p className="mb-2 text-sm text-gray-500">
          {source.name} -
          <time dateTime={publishedAt} className="ml-1">
            {relativeDate(new Date(publishedAt))}
          </time>
        </p>
        <h2 className="mb-4 text-4xl font-bold">{title}</h2>
        <p className=" text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Article;
