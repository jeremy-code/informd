import { ReadonlyURLSearchParams } from "next/navigation";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

// Get a new searchParams string by merging the current
// searchParams with a provided key/value pair
export const createQueryString = (
  name: string,
  value: string,
  searchParams?: ReadonlyURLSearchParams
) => {
  const params = new URLSearchParams(searchParams);
  params.set(name, value);

  return params.toString();
};
