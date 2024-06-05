import { API_URL, BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";
import useSWR from "swr";

export interface MenuItem {
  id: number;
  parent_id: number | null;
  name: string;
  name_eng: string;
  url: string;
  url_en: string;
  layout: string;
  type: string;
  type_id: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  menu?: MenuItem[];
}

interface MenuData {
  response: {
    main: MenuItem[];
    footer: MenuItem[];
  };
}

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
    menuData: data?.response,
    isLoading,
    isError: error,
  };
}
