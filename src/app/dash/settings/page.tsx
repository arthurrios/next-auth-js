import { auth } from '@/lib/auth'

export default async function Settings() {
  const session = await auth()

  return (
    <div>
      <h1 className="text-3xl">Settings of {session?.user?.name}</h1>
    </div>
  )
}
