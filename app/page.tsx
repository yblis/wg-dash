import { Suspense } from 'react'
import Dashboard from '@/components/Dashboard'
import { DashboardSkeleton } from '@/components/DashboardSkeleton'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">WireGuard Dashboard</h1>
      <Suspense fallback={<DashboardSkeleton />}>
        <Dashboard />
      </Suspense>
    </main>
  )
}

