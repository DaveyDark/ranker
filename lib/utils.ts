import { type ClassValue, clsx } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currUrl = qs.parse(params);
  currUrl[key] = value;
  return qs.stringifyUrl(
    { url: window.location.pathname, query: currUrl },
    { skipNull: true },
  );
};

interface RemoveUrlQueryParams {
  params: string;
  keys: string[];
}

export const removeKeysFromQuery = ({ params, keys }: RemoveUrlQueryParams) => {
  const currUrl = qs.parse(params);
  keys.forEach((k) => delete currUrl[k]);

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currUrl },
    { skipNull: true },
  );
};
