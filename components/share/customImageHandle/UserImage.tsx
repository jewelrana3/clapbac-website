import Image from "next/image";
import type { StaticImageData } from "next/image";

import fallbackImage from "../../../public/avatar.jpg";

const UserImage = ({
  item,
  name = "user logo",
  width = 50,
  height = 10,
  className,
}: {
  item: string | null | undefined;
  name?: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  let logoSrc: string | StaticImageData = fallbackImage;

  if (typeof item === "string" && item.trim() !== "") {
    logoSrc = item.startsWith("http")
      ? item
      : `${process.env.NEXT_PUBLIC_BASE_URL}${item}`;
  }

  return (
    <Image
      src={logoSrc}
      alt={name}
      width={width}
      height={height}
      className={`object-cover rounded-full h-14 w-14 border ${className || ""}`}
      placeholder="blur"
      blurDataURL="/blur-placeholder.png"
    />
  );
};

export default UserImage;
