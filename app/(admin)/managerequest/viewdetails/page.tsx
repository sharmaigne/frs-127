import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
   <div key="1" className="flex flex-col gap-8 p-6 md:p-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
          <CardHeader>
            <CardTitle className="text-lg font-bold">User Profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">User ID</Label>
                <p className="text-gray-900 dark:text-gray-50">12345</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</Label>
                <p className="text-gray-900 dark:text-gray-50">Admin</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">First Name</Label>
                <p className="text-gray-900 dark:text-gray-50">John</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Middle Initial</Label>
                <p className="text-gray-900 dark:text-gray-50">A</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Name</Label>
                <p className="text-gray-900 dark:text-gray-50">Doe</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</Label>
                <p className="text-gray-900 dark:text-gray-50">john.doe@example.com</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact Number</Label>
                <p className="text-gray-900 dark:text-gray-50">+1 (555) 555-5555</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Event Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Event Name</Label>
              <p className="text-gray-900 dark:text-gray-50">Annual Conference</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Organization</Label>
              <p className="text-gray-900 dark:text-gray-50">Acme Inc.</p>
            </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Event Description</Label>
              <p className="text-gray-900 dark:text-gray-50">
                The annual conference for our organization, bringing together industry leaders and experts.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Start Timestamp</Label>
                <p className="text-gray-900 dark:text-gray-50">2023-06-01 09:00:00</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">End Timestamp</Label>
                <p className="text-gray-900 dark:text-gray-50">2023-06-03 17:00:00</p>
              </div>
            </div>
           
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outline">
                {/* <DownloadIcon className="h-4 w-4 mr-2" /> */}
                Activity Design PDF
              </Button>
              <Button size="sm" variant="outline">
                {/* <DownloadIcon className="h-4 w-4 mr-2" /> */}
                Venue Request PDF
              </Button>
            </div>
          </CardContent>
        </Card>
        
      </div>
     <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>TIN</TableHead>
                  <TableHead>Effect</TableHead>
                  <TableHead>Likelihood</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Mitigating Action</TableHead>
                  <TableHead>Escalation Point</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>987654321</TableCell>
                  <TableCell>Moderate</TableCell>
                  <TableCell>Unlikely</TableCell>
                  <TableCell>Moderate</TableCell>
                  <TableCell>Implement additional security measures</TableCell>
                  <TableCell>Security Manager</TableCell>

                </TableRow>
              </TableBody>
            </Table>
            <div className="flex justify-end">
              <Button size="sm" variant="outline">
                {/* <DownloadIcon className="h-4 w-4 mr-2" /> */}
                Risk Analysis PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Request Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Start Time</TableHead>
                <TableHead>End Time</TableHead>
                <TableHead>Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>09:00:00</TableCell>
                <TableCell>17:00:00</TableCell>
                <TableCell>Annual Conference</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-10 h-10 border">
            <img alt="@shadcn" src="/placeholder.svg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="flex-1 grid gap-2">
            <Textarea className="resize-none" placeholder="Leave a comment..." />
            <div className="flex justify-end gap-2">
              <Button variant="outline">Deny</Button>
              <Button>Accept</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}