import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DownloadIcon, UploadIcon } from 'lucide-react'

export function TotalStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Download</CardTitle>
          <DownloadIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalDownload} MB</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Upload</CardTitle>
          <UploadIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalUpload} MB</div>
        </CardContent>
      </Card>
    </div>
  )
}

