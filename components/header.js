import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = [
    {
      textLink: "About",
      urlLink: "/about",
    },
    {
      textLink: "Help",
      urlLink: "/help",
    },
    {
      textLink: "Developers",
      urlLink: "/developers",
    },
  ];

  return (
    <div className="flex items-center justify-between py-8">
      <Link href="/">Logo</Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>

          <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {links.map((link, index) => {
                return (
                  <li
                    className="border-b border-gray-400 my-8"
                    key={index}
                  >
                    <a href={link.urlLink}>{link.textLink}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          {links.map((link, index) => {
            return (
              <li className="border-gray-400" key={index}>
                <a href={link.urlLink}>{link.textLink}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
