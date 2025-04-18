'use client'

import { Button } from '@/components/ui/button'
import { signOutAction } from '../_actions/signOutAction'

export function AppBar() {
  return (
    <header className="h-20 flex justify-end border-b items-center px-6">
      <Button onClick={signOutAction}>Log out</Button>
    </header>
  )
}
