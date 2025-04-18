'use client'

import { Button } from '@/components/ui/button'
import { signOutAction } from '../_actions/signOutAction'
import { useSession } from 'next-auth/react'

export function AppBar() {
  const session = useSession()

  if (session.status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <header className="h-20 flex justify-between border-b items-center px-6">
      <span>Hello, {session.data?.user?.name}</span>
      <Button onClick={signOutAction}>Log out</Button>
    </header>
  )
}
