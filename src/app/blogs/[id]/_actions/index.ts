import { API_URL, BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";
import useSWR from "swr";

const fetcher = async (url: string, id: string | string[]) => {
  const token = Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PW}`).toString(
    "base64"
  );
  return await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  }).then((res) => res.json());
};

export function GetBlogId(id: string | string[]) {
  const { data, error, isLoading } = useSWR(
    [`${API_URL}/api/v1/news/getNewsById`, id],
    ([url, id]) => fetcher(url, id)
  );

  return {
    data: data?.response || [],
    isLoading,
    isError: error,
  };
}
