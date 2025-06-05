import { HeadingProps } from "@/types";

function Heading({ heading }: HeadingProps) {
  return <h2 className="secondary-heading padding-block-1">{heading}</h2>;
}

export default Heading;
