import { API_URL, BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";
import useSWR from "swr";

export type MenuItem = {
  id: number;
  title: string;
  type: string;
  url: string;
  module: string;
  module_id: string | null;
  subMenu: MenuItem[];
};

type MenuData = {
  response: {
    header: MenuItem[];
    footer: MenuItem[];
  };
};

const fetcher = (url: string) => {
  const token = Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PW}`).toString(
    "base64"
  );
  return fetch(url, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  }).then((res) => res.json());
};

export function getMenuData() {
  const { data, error, isLoading } = useSWR<MenuData>(
    `${API_URL}/api/v1/menu/getAllList`,
    fetcher
  );

  return {
    menuData: data?.response?.footer || [],
    isLoading,
    isError: error,
  };
}
