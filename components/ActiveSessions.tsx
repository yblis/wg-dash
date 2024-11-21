import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function ActiveSessions({ sessions }) {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Active Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Connected Since</TableHead>
              <TableHead>Download</TableHead>
              <TableHead>Upload</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.map((session) => (
              <TableRow key={session.user}>
                <TableCell>{session.user}</TableCell>
                <TableCell>{session.connectedSince}</TableCell>
                <TableCell>{session.download} MB</TableCell>
                <TableCell>{session.upload} MB</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

