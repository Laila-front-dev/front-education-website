import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
}

function Button({ text, href, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`button ${className} text-neutral-50 text-transform-capitalize padding-block-4 padding-inline-4`}
    >
      {text}
    </Link>
  );
}

export default Button;
