import Image from "next/image";
import Link from "next/link";
import slug from "slug";

import type { Article as ArticleProps } from "@/types";
import { Timestamp } from "../Misc";

const FeaturedArticle = (props: ArticleProps) => {
  const { title, description, source, publishedAt, urlToImage } = props;

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Image
        className="rounded-lg"
        src={urlToImage}
        alt={title}
        width={384}
        height={256}
        priority
      />
      <div className="self-center">
        <p className="mb-2 text-sm text-gray-500">
          {source.name} -
          <Timestamp date={publishedAt} text="published" className="ml-1" />
        </p>
        <Link href={`/news/${slug(title)}`}>
          <h2 className="mb-4 text-4xl font-bold">{title}</h2>
        </Link>
        <p className=" text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedArticle;
