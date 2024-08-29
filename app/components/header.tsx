import Link from "next/link"

export default function Header() {
    const navItems = [
        {
            title: '',
            href: '/'
        },
        {
            title: 'Shop',
            href: '/shop'
        },
        {
            title: 'Subscriptions',
            href: '/subscriptions'
        },
        {
            title: 'Locations',
            href: '/locations'
        },
        {
            title: 'About',
            href: '/About'
        },
        {
            title: 'News',
            href: '/news'
        },
        {
            title: 'Join Kennyz',
            href: '/join-kennyz'
        },
    ]
    return (
        <header className="p-4 m-0 font-semibold">
            <ul className="flex flex-row gap-7">
            {navItems.map((item) => (
                    <li key={item.title} >
                        <Link href={item.href}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}