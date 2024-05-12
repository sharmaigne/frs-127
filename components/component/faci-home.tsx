/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dajerKtqpxG
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardContent, Card } from "@/components/ui/card"

export function FaciHome() {
  return (
    <div key="1" className="min-h-[100dvh] flex flex-col">
      <header className="bg-[#8B1538] text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="#">
            <UniversityIcon className="h-8 w-8" />
            <span className="text-lg font-semibold font-lato">University Facilities</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="hover:underline underline-offset-4 font-libre-franklin" href="#">
              Home
            </Link>
            <Link className="hover:underline underline-offset-4 font-libre-franklin" href="#">
              Calendar View
            </Link>
            <Link className="hover:underline underline-offset-4 font-libre-franklin" href="#">
              Requests
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="md:hidden" variant="outline">
            <MenuIcon className="h-6 w-6" />
          </Button>
          <Button
            className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
            variant="outline"
          >
            <FilterIcon className="h-6 w-6" />
          </Button>
          <Button
            className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
            variant="outline"
          >
            <BellIcon className="h-6 w-6" />
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarImage alt="Profile" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#8B1538] text-white py-12 md:py-20 lg:py-28">
          <div className="container px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Carousel className="rounded-xl overflow-hidden">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      alt="University Campus"
                      className="w-full h-full object-cover"
                      height="500"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "800/500",
                        objectFit: "cover",
                      }}
                      width="800"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="University Campus"
                      className="w-full h-full object-cover"
                      height="500"
                      src=""
                      style={{
                        aspectRatio: "800/500",
                        objectFit: "cover",
                      }}
                      width="800"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="University Campus"
                      className="w-full h-full object-cover"
                      height="500"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "800/500",
                        objectFit: "cover",
                      }}
                      width="800"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lato">UP Reserve Hub</h1>
                <p className="text-lg md:text-xl font-libre-franklin">
                  Find and book the perfect facility for your event or activity.
                </p>
                <form className="flex items-center gap-2">
                  <Input className="flex-1" placeholder="Search facilities..." type="text" />
                  <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                    Search
                  </Button>
                </form>
                <div className="flex flex-wrap gap-2">
                  <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                    Library
                  </Badge>
                  <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                    Sports
                  </Badge>
                  <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                    Halls
                  </Badge>
                  <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                    Other
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <Tabs defaulttValue="halls">
              <TabsList className="flex border-b border-gray-200 dark:border-gray-800 bg-[#1C7B45] text-white">
                <TabsTrigger className="bg-[#1C7B45] text-white hover:bg-[#155c34] font-libre-franklin" value="halls">
                  Halls
                </TabsTrigger>
                <TabsTrigger
                  className="bg-[#1C7B45] text-white hover:bg-[#155c34] font-libre-franklin"
                  value="classrooms"
                >
                  Classrooms
                </TabsTrigger>
                <TabsTrigger
                  className="bg-[#1C7B45] text-white hover:bg-[#155c34] font-libre-franklin"
                  value="gymnasium"
                >
                  Gymnasium Courts
                </TabsTrigger>
                <TabsTrigger
                  className="bg-[#1C7B45] text-white hover:bg-[#155c34] font-libre-franklin"
                  value="openfields"
                >
                  Open Fields
                </TabsTrigger>
              </TabsList>
              <TabsContent value="halls">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-lato">Atrium</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">Capacity: 1000 people</p>
                      </div>
                      <img
                        alt="Atrium"
                        className="rounded-lg overflow-hidden"
                        height="400"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "600/400",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                      <div className="flex flex-wrap gap-2">
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Large Events
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Lectures
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Performances
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Concerts
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Conferences
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Graduations
                        </Badge>
                      </div>
                      <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                        Reserve
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-lato">Lemito Hall</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">Capacity: 800 people</p>
                      </div>
                      <img
                        alt="Lemito Hall"
                        className="rounded-lg overflow-hidden"
                        height="400"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "600/400",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                      <div className="flex flex-wrap gap-2">
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Weddings
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Galas
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Formal Dinners
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Dances
                        </Badge>
                      </div>
                      <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                        Reserve
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-lato">Lorenzo Hall</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">Capacity: 150 people</p>
                      </div>
                      <img
                        alt="Lorenzo Hall"
                        className="rounded-lg overflow-hidden"
                        height="400"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "600/400",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                      <div className="flex flex-wrap gap-2">
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Projector
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Whiteboard
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Seating
                        </Badge>
                      </div>
                      <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                        Reserve
                      </Button>
                      <Link href="#">
                        <Button
                          className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
                          variant="outline"
                        >
                          View Slots
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-lato">Banquet Hall</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">Capacity: 500 people</p>
                      </div>
                      <img
                        alt="Banquet Hall"
                        className="rounded-lg overflow-hidden"
                        height="400"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "600/400",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                      <div className="flex flex-wrap gap-2">
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Weddings
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Receptions
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Banquets
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Galas
                        </Badge>
                      </div>
                      <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                        Reserve
                      </Button>
                      <Link href="#">
                        <Button
                          className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
                          variant="outline"
                        >
                          View Slots
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-lato">Recital Hall</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">Capacity: 300 people</p>
                      </div>
                      <img
                        alt="Recital Hall"
                        className="rounded-lg overflow-hidden"
                        height="400"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "600/400",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                      <div className="flex flex-wrap gap-2">
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Recitals
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Performances
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Lectures
                        </Badge>
                      </div>
                      <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                        Reserve
                      </Button>
                      <Link href="#">
                        <Button
                          className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
                          variant="outline"
                        >
                          View Slots
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="classrooms">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-lato">Lecture Hall A</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">Capacity: 200 people</p>
                      </div>
                      <img
                        alt="Lecture Hall A"
                        className="rounded-lg overflow-hidden"
                        height="400"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "600/400",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                      <div className="flex flex-wrap gap-2">
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Projector
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Whiteboard
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Seating
                        </Badge>
                      </div>
                      <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                        Reserve
                      </Button>
                      <Link href="#">
                        <Button
                          className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
                          variant="outline"
                        >
                          View Slots
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-lato">Seminar Room</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">Capacity: 50 people</p>
                      </div>
                      <img
                        alt="Seminar Room"
                        className="rounded-lg overflow-hidden"
                        height="400"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "600/400",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                      <div className="flex flex-wrap gap-2">
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Projector
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Whiteboard
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Conference Table
                        </Badge>
                      </div>
                      <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                        Reserve
                      </Button>
                      <Link href="#">
                        <Button
                          className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
                          variant="outline"
                        >
                          View Slots
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="gymnasium">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-lato">Volleyball Court</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">Capacity: 800 people</p>
                      </div>
                      <img
                        alt="Volleyball Court"
                        className="rounded-lg overflow-hidden"
                        height="400"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "600/400",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                      <div className="flex flex-wrap gap-2">
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Basketball
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Volleyball
                        </Badge>
                        <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
                          Badminton
                        </Badge>
                      </div>
                      <Button className="bg-[#1C7B45] hover:bg-[#155c34]" variant="default">
                        Reserve
                      </Button>
                      <Link href="#">
                        <Button
                          className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
                          variant="outline"
                        >
                          View Slots
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="openfields" />
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
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


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function UniversityIcon(props) {
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
      <circle cx="12" cy="10" r="1" />
      <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M6 17v.01" />
      <path d="M6 13v.01" />
      <path d="M18 17v.01" />
      <path d="M18 13v.01" />
      <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    </svg>
  )
}
