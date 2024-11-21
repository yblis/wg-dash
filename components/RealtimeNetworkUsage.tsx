"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function RealtimeNetworkUsage({ data }) {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Realtime Network Usage by User</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(data[0]).filter(key => key !== 'time').map((user, index) => (
              <Line key={user} type="monotone" dataKey={user} stroke={`hsl(${index * 30}, 70%, 50%)`} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

