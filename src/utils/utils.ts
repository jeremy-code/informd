import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const relativeDate = (date: Date) => {
  const diffInSeconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  if (diffInSeconds >= 43200) {
    // 12 hours * 60 minutes * 60 seconds
    return new Intl.DateTimeFormat().format(date);
  } else if (diffInSeconds >= 3600) {
    // 60 minutes * 60 seconds
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (diffInSeconds >= 60) {
    // 60 seconds
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${diffInSeconds} ${diffInSeconds === 1 ? "second" : "seconds"} ago`;
  }
};
