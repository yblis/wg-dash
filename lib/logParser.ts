import fs from 'fs'
import path from 'path'

const TRAFFIC_LOG_PATH = '/var/log/wireguard_traffic.txt'
const CONNECTIONS_LOG_PATH = '/var/log/wireguard_connections.log'

export function parseTrafficLog() {
  const content = fs.readFileSync(TRAFFIC_LOG_PATH, 'utf-8')
  const lines = content.split('\n').filter(line => line.trim() !== '')
  
  return lines.map(line => {
    const [date, time, user, , duration, download, upload] = line.split(' ')
    return {
      timestamp: `${date} ${time}`,
      user,
      duration: duration.split(':')[1],
      download: parseFloat(download.split(':')[1]),
      upload: parseFloat(upload.split(':')[1])
    }
  })
}

export function parseConnectionsLog() {
  const content = fs.readFileSync(CONNECTIONS_LOG_PATH, 'utf-8')
  const lines = content.split('\n').filter(line => line.trim() !== '')
  
  return lines.map(line => {
    const [date, time, user, action] = line.split(' ')
    return {
      timestamp: `${date} ${time}`,
      user,
      action
    }
  })
}

export function getActiveUsers() {
  const connections = parseConnectionsLog()
  const activeUsers = new Set()
  
  for (const conn of connections.reverse()) {
    if (conn.action === 'connected') {
      activeUsers.add(conn.user)
    } else if (conn.action === 'disconnected') {
      activeUsers.delete(conn.user)
    }
  }
  
  return Array.from(activeUsers).map(user => ({ name: user }))
}

export function getTotalStats() {
  const traffic = parseTrafficLog()
  return traffic.reduce((acc, curr) => {
    acc.totalDownload += curr.download
    acc.totalUpload += curr.upload
    return acc
  }, { totalDownload: 0, totalUpload: 0 })
}

export function getActiveSessions() {
  const connections = parseConnectionsLog()
  const traffic = parseTrafficLog()
  const activeSessions = []
  
  for (const conn of connections.reverse()) {
    if (conn.action === 'connected' && !activeSessions.find(session => session.user === conn.user)) {
      const userTraffic = traffic.filter(t => t.user === conn.user).pop()
      activeSessions.push({
        user: conn.user,
        connectedSince: conn.timestamp,
        download: userTraffic ? userTraffic.download : 0,
        upload: userTraffic ? userTraffic.upload : 0
      })
    }
  }
  
  return activeSessions
}

export function getConnectionHistory() {
  return parseConnectionsLog().slice(-10).reverse() // Get last 10 connections
}

export function getNetworkUsageByUser() {
  const traffic = parseTrafficLog()
  const userStats = {}
  
  for (const entry of traffic) {
    if (!userStats[entry.user]) {
      userStats[entry.user] = { name: entry.user, download: 0, upload: 0 }
    }
    userStats[entry.user].download += entry.download
    userStats[entry.user].upload += entry.upload
  }
  
  return Object.values(userStats)
}

// This is a mock function for realtime data
export function getRealtimeNetworkUsage() {
  const users = getActiveUsers()
  const data = []
  for (let i = 0; i < 10; i++) {
    const entry = { time: new Date(Date.now() - (9 - i) * 60000).toISOString().substr(11, 8) }
    users.forEach(user => {
      entry[user.name] = Math.random() * 10
    })
    data.push(entry)
  }
  return data
}

