"use client";

import { NavHeaderLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";

function NavHeader({ logo, navbar, cta }: Readonly<NavHeaderLayout>) {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleMenu() {
    setMenuVisible((prev) => !prev);
  }

  return (
    <div className="nav-header full-width padding-block-4">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <StrapiImage
              src={logo.image.url}
              alt={logo.image.alternativeText || "Default alt text"}
              width={100}
              height={70}
              // fill
            />
          </Link>
        </div>
        <button
          onClick={handleMenu}
          className="mobile-nav-toggle"
          aria-controls="mobile-navigation"
          aria-expanded={menuVisible}
        >
          <span className="sr-only">Menu</span>
        </button>
        <div
          className="mobile-navigation flex gap-1 items-center"
          id="mobile-navigation"
          data-visible={menuVisible}
        >
          <nav>
            <ul
              role="list"
              className="primary-navigation flex items-center gap-1 padding-block-start-4"
            >
              {navbar.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-primary-900 fs-200 fw-regular text-transform-capitalize"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Button
              href={cta.href}
              className="bg-primary-400"
              text={cta.text}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
