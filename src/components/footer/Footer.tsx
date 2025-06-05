import Link from "next/link";
import StrapiImage from "../StrapiImage";
import { SocialMediaProps, NavbarProps, LogoProps } from "@/types";

interface LinksProps {
  id: number;
  name: string;
  navbar: NavbarProps[];
}

interface FooterProps {
  data: {
    description: string;
    socialMedia: SocialMediaProps[];
    links: LinksProps[];
    logo: LogoProps;
  };
}

async function Footer({ data }: FooterProps) {
  if (!data) return null;
  const { description, socialMedia, links, logo } = data;
  return (
    <footer className="content-grid">
      <div className="grid grid-columns">
        <div className="flow">
          <Link
            href={logo.href}
            style={{ width: "fit-content", display: "block" }}
          >
            <StrapiImage
              src={logo.image.url}
              alt={logo.image.alternativeText || "Default alt text"}
              width={70}
              height={70}
            />
          </Link>
          <p>{description}</p>
          <ul role="list" className="flex gap-1 social-media">
            {socialMedia.map((item) => (
              <li key={item.id} className="social-media-icon ">
                <Link href={item.href} target="_blank">
                  <StrapiImage
                    src={item.image.url}
                    alt={logo.image.alternativeText || "Default alt text"}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          {links.map((item) => (
            <div key={item.id} className="footer-link flow">
              <h3 className="ff-secondary text-transform-capitalize">
                {item.name}
              </h3>
              <nav>
                <ul role="list">
                  {item.navbar.map((link) => (
                    <li key={link.id}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
