'use client'

import { usePathname } from 'next/navigation'
import SubHeader from './subheader'

const validRoutes = ['/']

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (validRoutes.includes(pathname)) {
    return (
      <>
        <SubHeader />
        {children}
      </>
    )
  }

  return <>{children}</>
}
