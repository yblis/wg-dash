import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle><Skeleton className="h-4 w-[150px]" /></CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[200px]" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

