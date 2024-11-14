"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      title: "",
      href: "/",
    },
    {
      title: "Shop",
      href: "/custom-404",
    },
    {
      title: "Subscriptions",
      href: "/custom-404",
    },
    {
      title: "Locations",
      href: "/custom-404",
    },
    {
      title: "About",
      href: "/custom-404",
    },
    {
      title: "News",
      href: "/custom-404",
    },
    {
      title: "Join Kennyz",
      href: "/custom-404",
    },
  ];

  return (
    <header className="w-full px-4 py-2 m-0 font-semibold text-base border-b-2 border-brown-300">
      <div className="flex items-center justify-between md:justify-start">
        <Link
          href="/"
          className="flex flex-row items-center pr-4"
          scroll={false}
        >
          Kennyz
          <img src="/coffee.png" alt="logo" className="w-16" />
          Kaffeine
        </Link>
        <div className="w-0.5 h-12 bg-stone-300 mt-0 mr-2 mb-0 ml-4"></div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="hidden md:block ml-4">
            <ul className="flex flex-row gap-7">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} scroll={false}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" scroll={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36px"
              height="36px"
              viewBox="0 0 26 26"
              fill="none"
              // class="spree-icon"
            >
              <path
                d="M10.8657 24C10.8657 24.3956 10.7595 24.7822 10.5605 25.1111C10.3615 25.44 10.0787 25.6964 9.74776 25.8478C9.41685 25.9991 9.05273 26.0387 8.70144 25.9616C8.35015 25.8844 8.02748 25.6939 7.77421 25.4142C7.52094 25.1345 7.34847 24.7781 7.27859 24.3902C7.20872 24.0022 7.24458 23.6001 7.38164 23.2346C7.51871 22.8692 7.75082 22.5568 8.04863 22.3371C8.34644 22.1173 8.69657 22 9.05474 22C9.53504 22 9.99566 22.2107 10.3353 22.5858C10.6749 22.9609 10.8657 23.4696 10.8657 24ZM20.8259 22C20.4677 22 20.1176 22.1173 19.8198 22.3371C19.522 22.5568 19.2899 22.8692 19.1528 23.2346C19.0157 23.6001 18.9799 24.0022 19.0498 24.3902C19.1196 24.7781 19.2921 25.1345 19.5454 25.4142C19.7986 25.6939 20.1213 25.8844 20.4726 25.9616C20.8239 26.0387 21.188 25.9991 21.5189 25.8478C21.8498 25.6964 22.1327 25.44 22.3317 25.1111C22.5306 24.7822 22.6369 24.3956 22.6369 24C22.6369 23.4696 22.4461 22.9609 22.1064 22.5858C21.7668 22.2107 21.3062 22 20.8259 22ZM25.9652 6.27475L22.9773 17.8241C22.8135 18.4499 22.4704 19.0002 21.9995 19.3925C21.5286 19.7848 20.9553 19.9979 20.3655 20H9.51518C8.92534 19.9979 8.35199 19.7848 7.8811 19.3925C7.41021 19.0002 7.06714 18.4499 6.90334 17.8241L3.92036 6.29362C3.91698 6.28144 3.91381 6.26919 3.91086 6.25687L2.80957 2H0.905474C0.665328 2 0.435017 1.89464 0.265207 1.70711C0.0953979 1.51957 0 1.26522 0 1C0 0.734783 0.0953979 0.48043 0.265207 0.292893C0.435017 0.105357 0.665328 0 0.905474 0H2.80946C3.20268 0.00140482 3.5849 0.143507 3.89884 0.40501C4.21277 0.666514 4.44152 1.03333 4.5508 1.4505L5.46906 5H25.0945C25.2347 5 25.3729 5.03593 25.4984 5.10497C25.6238 5.174 25.733 5.27425 25.8174 5.39782C25.9018 5.52139 25.9591 5.66492 25.9847 5.81709C26.0104 5.96926 26.0037 6.12592 25.9652 6.27475ZM23.8941 7H5.98654L8.64468 17.2747C8.69927 17.4833 8.81361 17.6667 8.97056 17.7975C9.1275 17.9282 9.31859 17.9993 9.51518 18H20.3655C20.5621 17.9993 20.7532 17.9282 20.9101 17.7975C21.067 17.6667 21.1814 17.4833 21.236 17.2747L23.8941 7Z"
                fill="#452406"
              ></path>
            </svg>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
