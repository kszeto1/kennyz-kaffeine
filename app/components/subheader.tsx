"use client";
import Link from "next/link";
import { useState } from "react";
import FilteredProductList from "../products/FilteredProductList";
import dynamic from "next/dynamic";

const FilteredProductListWrapper = dynamic(
  () => import("./FilteredProductListWrapper"),
  {
    ssr: false,
  }
);

export default function SubHeader() {
  const [selectedCategory, setSelectedCategory] = useState("coffee");
  const navItems = [
    {
      title: "Coffee",
      href: "/",
    },
    {
      title: "Tea",
      href: "/",
    },
    {
      title: "Food",
      href: "/",
    },
    {
      title: "Beans",
      href: "/",
    },
    {
      title: "Merch",
      href: "/",
    },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex p-6 m-0 bg-[#fafafa] border-y-2 border-brown-300">
        <ul className="flex flex-row gap-8 font-semibold text-sm">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => handleCategoryClick(item.title.toLowerCase())}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <FilteredProductListWrapper category={selectedCategory} />
    </>
  );
}
