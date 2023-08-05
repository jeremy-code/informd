import React from "react";

import type { Article as ArticleProps } from "@/types";

const Article = (props: ArticleProps) => {
  const { title, description, content } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{content}</p>
    </div>
  );
};

export default Article;
