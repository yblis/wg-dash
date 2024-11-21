import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function ConnectionHistory({ history }) {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Connection History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.user}</TableCell>
                <TableCell>{entry.action}</TableCell>
                <TableCell>{entry.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

