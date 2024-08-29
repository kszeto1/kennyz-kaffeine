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
        <div className="p-4 m-4">
            <ul className="flex flex-row gap-4 font-semibold text-sm">
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