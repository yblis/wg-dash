import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserIcon } from 'lucide-react'

export function ActiveUsers({ users }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Active Users</CardTitle>
        <UserIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{users.length}</div>
        <p className="text-xs text-muted-foreground">
          {users.map(user => user.name).join(', ')}
        </p>
      </CardContent>
    </Card>
  )
}

