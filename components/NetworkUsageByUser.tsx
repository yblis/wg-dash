"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function NetworkUsageByUser({ data }) {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Network Usage by User</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="download" fill="#8884d8" name="Download (MB)" />
            <Bar dataKey="upload" fill="#82ca9d" name="Upload (MB)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

