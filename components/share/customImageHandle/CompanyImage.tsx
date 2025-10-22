import Image from "next/image";
import type { StaticImageData } from "next/image";

import fallbackImage from "../../../public/food-drink/one.png";

const CompanyImage = ({
  item,
  name = "Company Logo",
  width = 50,
  height = 50,
}: {
  item: string | null | undefined;
  name?: string;
  width?: number;
  height?: number;
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
      className="object-cover rounded-md"
      placeholder="blur"
      blurDataURL="/blur-placeholder.png"
    />
  );
};

export default CompanyImage;
