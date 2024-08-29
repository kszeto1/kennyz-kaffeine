import Link from "next/link"

export default function SubHeader() {
    const navItems = [
        {
            title: 'Coffee',
            href: '/coffee'
        },
        {
            title: 'Tea',
            href: '/tea'
        },
        {
            title: 'Food',
            href: '/food'
        },
        {
            title: 'Beans',
            href: '/beans'
        },
        {
            title: 'Merch',
            href: '/merch'
        }
    ]
    return (
        <div className="flex p-6 m-0 bg-[#fafafa] border-y-2 border-brown-300">
            <ul className="flex flex-row gap-8 font-semibold text-sm">
                {navItems.map((item) => {
                    return (
                        <li key={item.title}>
                            <Link href={item.href}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}