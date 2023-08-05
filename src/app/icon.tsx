import Image from "next/image";
import { ImageResponse } from "next/server";

import { logo } from "@/assets";

export const generateImageMetadata = () => {
  return [
    {
      id: "32",
      contentType: "image/png",
      size: { width: 32, height: 32 },
    },
    {
      id: "192",
      contentType: "image/png",
      size: { width: 192, height: 192 },
    },
    {
      id: "512",
      contentType: "image/png",
      size: { width: 512, height: 512 },
    },
  ];
};

export const runtime = "edge";

const Icon = ({ id }: { id: string }) => {
  return new ImageResponse(
    <Image src="/logo.svg" width={1000} height={1000} alt="informd.news logo" />,
    { width: parseInt(id), height: parseInt(id) }
  );
};

export default Icon;
