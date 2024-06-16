import { BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";
import useSWRInfinite from "swr/infinite";

//TODO: Жишээ байдлаар free api ашиглаж бичиж үлдээв

// const fetcher = async () => {
// const token = Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PW}`).toString(
//   "base64"
// );
// return await fetch(url, {
//   method: "POST",
//   headers: {
//     Authorization: `Basic ${token}`,
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ slug }),
// }).then((res) => res.json());
// };

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getKey = (pageIndex: number, previousPageData: string) => {
  if (previousPageData && !previousPageData.length) return null;

  return `https://api.thedogapi.com/v1/breeds?page=${pageIndex + 1}&limit=20`;
};

export const getVideos = () => {
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher
  );

  const items = data ? data.flat() : [];
  const isLoading = !data && !error;
  const isError = error;

  return { items, isLoading, isError, size, setSize, isValidating };
};