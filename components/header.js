import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

import { ExternalLink, Menu, X } from "react-feather";

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

  const scrollFunction = (x) => {
    if (
      (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) &&
      x.matches
    ) {
      document.getElementById("header").style.paddingBottom = "0.5rem";
      document.getElementById("header").style.paddingTop = "0.5rem";
    } else {
      document.getElementById("header").style.paddingBottom = "2rem";
      document.getElementById("header").style.paddingTop = "2rem";
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      var x = window.matchMedia("(min-width: 1024px)");
      scrollFunction(x);
    };
  }, []);

  return (
    <header
      id="header"
      className="flex items-center justify-between py-8 px-6 sticky top-0 bg-gray-900 transition-all duration-300 ease-linear"
    >
      <Link href="/">Logo</Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <Menu size={32} />
          </div>

          <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
            <div className="absolute top-0 left-0 px-6 py-8">
              <Link href="/">Logo</Link>
            </div>

            <div
              className="CROSS-ICON absolute top-0 right-0 px-6 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <X size={32} />
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {links.map((link, index) => {
                return (
                  <li className={styles.navLink} key={index}>
                    <Link href={link.urlLink}>{link.textLink}</Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="/app"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="flex justify-center items-center space-x-1 rounded-lg tracking-wider font-semibold border-2 border-indigo-500 px-5 py-2 bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500 transition-shadow"
                >
                  <span>App</span>
                  <ExternalLink size={20} />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex justify-center items-center">
          {links.map((link, index) => {
            return (
              <li className={styles.navLink} key={index}>
                <Link href={link.urlLink}>{link.textLink}</Link>
              </li>
            );
          })}
          <li>
            <a
              href="/app"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="flex justify-center items-center space-x-1 rounded-lg tracking-wider font-semibold border-2 border-indigo-500 px-5 py-2 bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500 transition-shadow"
            >
              <span>App</span>
              <ExternalLink size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
