import { Input } from '@/components/ui/input'
import { UserProfile } from './user-profile'

const Header = () => {
  return (
    <header className="mb-4 border-b border-zinc-200">
      <div className="container">
        <div className="grid grid-cols-3 items-center py-6">
          <h1 className="text-xl font-semibold tracking-tight">My Shop</h1>
          <div>
            <div>
              <Input type="search" placeholder="Search..." className="w-full px-4 py-6" />
            </div>
          </div>
          <div className="flex justify-end">
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
