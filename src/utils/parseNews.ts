"use server";

import { Readability } from "@mozilla/readability";
import { sanitize } from "isomorphic-dompurify";
import { JSDOM } from "jsdom";

export const parseNews = async (url: string) => {
  const html = await (await fetch(url)).text();
  const doc = new JSDOM(html, { url });
  const reader = new Readability(doc.window.document);
  const article = reader.parse();

  if (!article) throw new Error("Failed to parse article");

  return {
    ...article,
    content: sanitize(article.content),
  };
};
