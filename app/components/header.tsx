import Link from "next/link";

export default function Header() {
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
      href: "/About",
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
    <header className="flex p-4 m-0 items-center font-semibold text-base">
      <Link href="/" className="flex flex-row items-center border-r-2 border-brown-300 pr-4">
        Kennyz
        <img src="/coffee.png" alt="logo" className="w-16" />
        Kaffeine
      </Link>
      <ul className="flex flex-row gap-7">
        {navItems.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
