import { NextRequest, NextResponse } from "next/server";

import { NewsResponse } from "@/types";

const API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = process.env.NEWS_API_KEY;

export const GET = async (req: NextRequest) => {
  if (!API_KEY) {
    return NextResponse.json({
      error: "API_KEY is not defined",
      status: 500,
    });
  }

  const data = (await (
    await fetch(API_URL, {
      headers: {
        "x-api-key": API_KEY,
      },
    })
  ).json()) as NewsResponse;

  return NextResponse.json({
    ...data,
  });
};
