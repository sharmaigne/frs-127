/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/wYci4zcpN0a
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Judson } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogContent, Dialog } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { PaginationPrevious, PaginationItem, PaginationLink, PaginationContent, Pagination } from "@/components/ui/pagination"

export function adminpage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Facility Reservations</h1>
        <div className="flex items-center gap-4">
          <Input className="max-w-xs" placeholder="Search reservations..." type="search" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 space-y-1">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Approved</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Rejected</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                <div className="flex items-center justify-between">
                  <span>Date</span>
                  <CalendarIcon className="h-4 w-4" />
                </div>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                <div className="flex items-center justify-between">
                  <span>Facility</span>
                  <BuildingIcon className="h-4 w-4" />
                </div>
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Facility</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Conference Room A</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p>2023-05-18</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">9:00 AM - 11:00 AM</p>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="pending">Pending</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <CheckIcon className="h-4 w-4" />
                    <span className="sr-only">Approve</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">Reject</span>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="icon" variant="outline">
                        <InfoIcon className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[600px] p-6">
                      <DialogHeader>
                        <DialogTitle>John Doe</DialogTitle>
                        <DialogDescription>Reservation details for Conference Room A</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium">User</h4>
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">John Doe</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Facility</h4>
                            <p>Conference Room A</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Date</h4>
                            <div className="flex flex-col">
                              <p>2023-05-18</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">9:00 AM - 11:00 AM</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Status</h4>
                            <Badge variant="pending">Pending</Badge>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium">Notes</h4>
                            <Textarea placeholder="Enter your note..." />
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Anderson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">sarah@example.com</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Outdoor Pavilion</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p>2023-05-20</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM - 5:00 PM</p>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="approved">Approved</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <CheckIcon className="h-4 w-4" />
                    <span className="sr-only">Approve</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">Reject</span>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="icon" variant="outline">
                        <InfoIcon className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[600px] p-6">
                      <DialogHeader>
                        <DialogTitle>Sarah Anderson</DialogTitle>
                        <DialogDescription>Reservation details for Outdoor Pavilion</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium">User</h4>
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>SA</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">Sarah Anderson</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">sarah@example.com</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Facility</h4>
                            <p>Outdoor Pavilion</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Date</h4>
                            <div className="flex flex-col">
                              <p>2023-05-20</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM - 5:00 PM</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Status</h4>
                            <Badge variant="approved">Approved</Badge>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium">Notes</h4>
                            <Textarea placeholder="Enter your note..." />
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Michael Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">michael@example.com</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Gymnasium</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p>2023-05-22</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">6:00 PM - 8:00 PM</p>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="rejected">Rejected</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <CheckIcon className="h-4 w-4" />
                    <span className="sr-only">Approve</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">Reject</span>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="icon" variant="outline">
                        <InfoIcon className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[600px] p-6">
                      <DialogHeader>
                        <DialogTitle>Michael Johnson</DialogTitle>
                        <DialogDescription>Reservation details for Gymnasium</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium">User</h4>
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>MJ</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">Michael Johnson</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">michael@example.com</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Facility</h4>
                            <p>Gymnasium</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Date</h4>
                            <div className="flex flex-col">
                              <p>2023-05-22</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">6:00 PM - 8:00 PM</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Status</h4>
                            <Badge variant="rejected">Rejected</Badge>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium">Notes</h4>
                            <Textarea placeholder="Enter your note..." />
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}