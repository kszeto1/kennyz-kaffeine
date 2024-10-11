'use client'

import { usePathname } from 'next/navigation'
import SubHeader from './subheader'

const validRoutes = ['/']

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <main className="w-full">
      {validRoutes.includes(pathname) && <SubHeader />}
      {children}
    </main>
  )
}
