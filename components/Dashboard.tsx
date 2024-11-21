import { ActiveUsers } from './ActiveUsers'
import { TotalStats } from './TotalStats'
import { RealtimeNetworkUsage } from './RealtimeNetworkUsage'
import { ActiveSessions } from './ActiveSessions'
import { ConnectionHistory } from './ConnectionHistory'
import { NetworkUsageByUser } from './NetworkUsageByUser'
import { getActiveUsers, getTotalStats, getRealtimeNetworkUsage, getActiveSessions, getConnectionHistory, getNetworkUsageByUser } from '@/lib/logParser'

export default async function Dashboard() {
  const activeUsers = getActiveUsers()
  const totalStats = getTotalStats()
  const realtimeData = getRealtimeNetworkUsage()
  const activeSessions = getActiveSessions()
  const connectionHistory = getConnectionHistory()
  const networkUsageByUser = getNetworkUsageByUser()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ActiveUsers users={activeUsers} />
      <TotalStats stats={totalStats} />
      <RealtimeNetworkUsage data={realtimeData} />
      <ActiveSessions sessions={activeSessions} />
      <ConnectionHistory history={connectionHistory} />
      <NetworkUsageByUser data={networkUsageByUser} />
    </div>
  )
}

