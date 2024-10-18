'use client'

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
      href: "/shop",
    },
    {
      title: "Subscriptions",
      href: "/subscriptions",
    },
    {
      title: "Locations",
      href: "/locations",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "News",
      href: "/news",
    },
    {
      title: "Join Kennyz",
      href: "/join-kennyz",
    },
  ];

  return (
    <header className="w-full px-4 py-2 m-0 font-semibold text-base">
      <div className="flex items-center justify-between md:justify-start">
        <Link href="/" className="flex flex-row items-center pr-4" scroll={false}>
          Kennyz
          <img src="/coffee.png" alt="logo" className="w-16" />
          Kaffeine
        </Link>
        <div className="w-0.5 h-12 bg-stone-300 mt-0 mr-2 mb-0 ml-4">
        </div>
        <div className="hidden md:block ml-4">
          <ul className="flex flex-row gap-7">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href} scroll={false}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
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
