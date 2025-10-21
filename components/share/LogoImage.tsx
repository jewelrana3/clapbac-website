import Image from "next/image";
import one from "../../public/food-drink/one.png";

const LogoImage = ({
  item,
  name,
  width = 100,
  height = 100,
}: {
  item: string | null;
  name?: string;
  width?: number;
  height?: number;
}) => {
  console.log(item);
  const logoSrc = item?.startsWith("http")
    ? item
    : `${process.env.NEXT_PUBLIC_BASE_URL}${item}`;

  return (
    <Image
      src={logoSrc || one} // fallback image if logo is missing
      alt={name || "Company Logo"}
      width={width}
      height={height}
      className="object-cover rounded-md"
      placeholder="blur"
      blurDataURL="/blur-placeholder.png" // optional low-res placeholder
    />
  );
};

export default LogoImage;
