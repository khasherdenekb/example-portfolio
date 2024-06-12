import { API_URL, BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const token = Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PW}`).toString(
    "base64"
  );
  return await fetch(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  }).then((res) => res.json());
};

export function getBannerData() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/v1/home/getModules`,
    fetcher
  );

  // Slider data заавал хоосон string initial array-тай байна
  // do not change
  return {
    bannerData: data?.response?.banner || [],
    sliderData: data?.response?.slider || [""],
    categoryData: data?.response?.category || [],
    productsData: data?.response?.products || [],
    videosData: data?.response?.video || [],
    isLoading,
    isError: error,
  };
}
