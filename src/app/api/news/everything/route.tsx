import { NextRequest, NextResponse } from "next/server";

import { NewsResponse } from "@/types";

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = process.env.NEWS_API_KEY;

export const revalidate = 60;

export const GET = async (req: NextRequest, { params }: { params: Record<string, string> }) => {
  if (!API_KEY) {
    return NextResponse.json({
      error: "API_KEY is not defined",
      status: 500,
    });
  }

  const data = (await (
    await fetch(`${API_URL}?${new URLSearchParams(params)}`, {
      headers: {
        "x-api-key": API_KEY,
        ...req.headers,
      },
    })
  ).json()) as NewsResponse;

  return NextResponse.json({
    ...data,
  });
};
