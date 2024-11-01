'use client'

import { usePathname } from 'next/navigation'
import SubHeader from './subheader'
import { Suspense } from 'react'

const validRoutes = ['/']

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <main className="w-full">
      {validRoutes.includes(pathname) && <SubHeader />}
      {children}
    </main>
    </Suspense>
  )
}
