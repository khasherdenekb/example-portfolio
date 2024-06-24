import { API_URL, BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";
import useSWR from "swr";
import { useMemo } from "react";

interface IFetcherBody {
  limit?: number;
  page?: string | string[];
  type?: string;
  category?: string;
}

const fetcher = (url: string, body: IFetcherBody) => async () => {
  const token = Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PW}`).toString(
    "base64"
  );
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export function GetBlogs(page: string | string[], category: string) {
  const memoizedFetcher = useMemo(
    () =>
      fetcher(`${API_URL}/api/v1/news/getPages`, { limit: 10, page, category }),
    [page, category]
  );

  const { data, error } = useSWR(
    [`${API_URL}/api/v1/news/getPages`, page, category],
    memoizedFetcher
  );

  return {
    data: data?.response || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetCategories() {
  const { data, error } = useSWR(
    `${API_URL}/api/v1/category/getCategoryList`,
    fetcher(`${API_URL}/api/v1/category/getCategoryList`, { type: "news" })
  );

  return {
    data: data?.response || [],
    isLoading: !error && !data,
    isError: error,
  };
}
