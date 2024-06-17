import { API_URL, BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

//TODO: Жишээ байдлаар free api ашиглаж бичиж үлдээв

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
    body: JSON.stringify({ type: "video" }),
  }).then((res) => res.json());
};

// const fetcher = async (url: string) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// const getKey = (pageIndex: number, previousPageData: string) => {
//   if (previousPageData && !previousPageData.length) return null;

//   //TODO: random api ашиглаж жишээ байдлаар оруулав
//   return `https://api.thedogapi.com/v1/breeds?page=${pageIndex + 1}&limit=21`;
// };



export function getVideos() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/v1/category/getCategoryItemListById`,
    fetcher
  );

  return {
    data: data?.response || [],
    isLoading,
    isError: error,
  };
}