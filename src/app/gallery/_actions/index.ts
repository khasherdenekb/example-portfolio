import { API_URL, BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const token = Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PW}`).toString(
    "base64"
  );
  return await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export function getGalleries() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/category/getList`,
    fetcher
  );

  return {
    data: data?.response || [],
    isLoading,
    isError: error,
  };
}
