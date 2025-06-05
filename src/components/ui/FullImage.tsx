import { FullImageProps } from "@/types";
import StrapiImage from "../StrapiImage";

function FullImage({ image }: FullImageProps) {
  return (
    <div className="article-image padding-block-1">
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        // width={1920}
        // height={1080}
        fill
      />
    </div>
  );
}

export default FullImage;
