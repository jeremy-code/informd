export type Article = {
  article_id: string;
  title: string;
  link: string;
  keywords: string | null;
  creator: string[] | null;
  video_url: string | null;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
};

export type NewsApiResponse = {
  status: "success" | "failure" | "unauthorized";
  totalResults: number;
  results: Article[];
};

export type NewsApiParams = {
  q?: string;
  qInTitle?: string;
  qInMeta?: string;
  timeframe?: string; // format either "X" for hours or "Xm" for minutes
  country?: string; // format "code1,code2,...", up to 5 countries
  category?: string; // format "category1,category2,...", up to 5 categories
  language?: string; // format "lang1,lang2,...", up to 5 languages
  domain?: string; // format "domain1,domain2,...", up to 5 domains
  domainurl?: string; // format "domainurl1,domainurl2,...", up to 5 domain URLs
  excludedomain?: string; // format "excludedomain1,excludedomain2,...", up to 5 excluded domains
  prioritydomain?: "top" | "medium" | "low";
  timezone?: string;
  full_content?: "0" | "1";
  image?: "0" | "1";
  video?: "0" | "1";
  size?: number; // 1 to 50
  page?: number;
};
