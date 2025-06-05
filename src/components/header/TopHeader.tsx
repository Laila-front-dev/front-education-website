"use client";

import { TopHeaderLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import Link from "next/link";
import { useState } from "react";

function TopHeader({ contactInfo, socialMedia }: Readonly<TopHeaderLayout>) {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleMenu() {
    setMenuVisible((prev) => !prev);
  }
  return (
    <div className="bg-primary-900 full-width">
      <button
        onClick={handleMenu}
        className="top-mobile-nav-toggle"
        aria-controls="top-mobile-navigation"
        aria-expanded={menuVisible}
      >
        <span className="sr-only">Menu</span>
      </button>
      <div
        className="top-mobile-navigation"
        id="top-mobile-navigation"
        data-visible={menuVisible}
      >
        <div className="flex justify-between items-center primary-navigation">
          <ul
            role="list"
            className="flex items-center gap-2-5 primary-navigation"
          >
            {contactInfo.map((item) => (
              <li key={item.id} className="flex items-center gap-05 ">
                <span>
                  <StrapiImage
                    src={item.image.url}
                    alt={item.image.alternativeText || "Default alt text"}
                    width={24}
                    height={24}
                  />
                </span>
                <span className="fs-20 text-neutral-50">{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="bg-accent-300 padding-block-4 padding-inline-4 social-media">
            <ul role="list" className="flex items-center gap-1 ">
              {socialMedia.map((item) => (
                <li key={item.id} className="social-media-icon ">
                  <Link href={item.href} target="_blank">
                    <StrapiImage
                      src={item.image.url}
                      alt={item.image.alternativeText || "Default alt text"}
                      width={44}
                      height={44}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
