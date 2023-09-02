import React, { HTMLAttributes } from "react";

import { cn } from "@/utils";

// milliseconds in a day
const MS_IN_DAY = 24 * 60 * 60 * 1000;

const timeUnits = {
  year: MS_IN_DAY * 365,
  month: (MS_IN_DAY * 365) / 12,
  day: MS_IN_DAY,
  hour: MS_IN_DAY / 24,
  minute: MS_IN_DAY / (24 * 60),
  second: MS_IN_DAY / (24 * 60 * 60),
};

const rtf = new Intl.RelativeTimeFormat("en", { style: "short" });

// Configure the date time format options
const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const getRelativeTime = (d1: Date, d2 = new Date()) => {
  const elapsed = d1.getTime() - d2.getTime();

  for (const [unit, value] of Object.entries(timeUnits)) {
    if (Math.abs(elapsed) > value || unit === "second") {
      return rtf.format(Math.round(elapsed / value), unit as Intl.RelativeTimeFormatUnit);
    }
  }
};

type TimestampProps = {
  text: string;
  date: Date;
} & HTMLAttributes<HTMLSpanElement>;

const Timestamp = ({ text, date, className }: TimestampProps) => (
  <span className={cn(className)}>
    {text}{" "}
    <time
      dateTime={date.toISOString()}
      title={date.toLocaleString(undefined, dateTimeFormatOptions)}
    >
      {getRelativeTime(date)}
    </time>
  </span>
);

export default Timestamp;
