import { getStapiUrl } from "@/utils/get-strapi-url";
import Image from "next/image";

interface StrapiImageProps {
  src: string;
  alt: string;
  [key: string]: string | number | boolean | undefined;
}

function StrapiImage({ src, alt, ...rest }: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;
  return <Image src={imageUrl} alt={alt} {...rest} />;
}

export default StrapiImage;

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return getStapiUrl() + url;
}
