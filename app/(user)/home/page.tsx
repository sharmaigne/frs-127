import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Tags from "./components/tags";
import FaciCard from "./components/faciCard";
import FaciTabs from "./components/faciTabs";
import { TabsContent, Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import('./components/Hero'), { ssr: false })

const HomePage = () => {
  return (
    <>
      {/* HEADER */}
      {/* <section className="bg-primary-500 text-white py-12 md:py-20 lg:py-28">
        <div className="con ainer px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <MainCarousel />
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-lato">
                UP Reserve Hub
              </h1>
              <p className="text-lg md:text-xl font-libre-franklin">
                The official reservation system of UP Mindanao
              </p>
              <form className="flex items-center gap-2">
                <Input
                  className="flex-1 text-black"
                  placeholder="Search facilities..."
                  type="text"
                />
                <Button className="bg-secondary hover:bg-secondary-600">
                  Search
                </Button>
              </form>
              <div className="flex flex-wrap gap-2">
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Hero />
      <section>
        <div>
          <Tabs defaultValue="halls">
            <TabsList className="flex border-b gap-2 rounded-none sticky top-[60px] border-gray-200 dark:border-gray-800 bg-accent text-darker">
              <TabsTrigger value="halls">Halls</TabsTrigger>
              <TabsTrigger value="classrooms">Classrooms</TabsTrigger>
              <TabsTrigger value="gymnasium">Gymnasium Courts</TabsTrigger>
              <TabsTrigger value="openfields">Open Fields</TabsTrigger>
            </TabsList>
            <TabsContent value="halls">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FaciCard
                  title="Atrium"
                  capacity="500 people"
                  imageSrc="./images/atrium.jpg"
                  activities={[
                    "Large Events",
                    "Lectures",
                    "Performances",
                    "Concerts",
                    "Conferences",
                    "Graduations",
                  ]}
                  reserveLink="/reserve/atrium"
                />
                <FaciCard
                  title="Lemito Hall"
                  capacity="100 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Weddings", "Galas", "Formal Dinners", "Dances"]}
                  reserveLink="/reserve/lemito-hall"
                />
                <FaciCard
                  title="Lorenzo Hall"
                  capacity="100 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Projector", "Whiteboard", "Seating"]}
                  reserveLink="/reserve/lorenzo-hall"
                  slotsLink="/slots/lorenzo-hall"
                />
              </div>
            </TabsContent>
            <TabsContent value="classrooms">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FaciCard
                  title="Mini Theater 1"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Weddings", "Receptions", "Banquets", "Galas"]}
                  reserveLink="/reserve/mini-theater-1"
                  slotsLink="/slots/mini-theater-1"
                />
                <FaciCard
                  title="Mini Theater 2"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Recitals", "Performances", "Lectures"]}
                  reserveLink="/reserve/mini-theater-2"
                  slotsLink="/slots/mini-theater-2"
                />
                <FaciCard
                  title="CSM Audio-Visual Room"
                  capacity="80 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Recitals", "Performances", "Lectures"]}
                  reserveLink="/reserve/csm-audio-visual-room"
                  slotsLink="/slots/csm-audio-visual-room"
                />
                <FaciCard
                  title="Cultural Center Room 1"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Weddings", "Receptions", "Banquets", "Galas"]}
                  reserveLink="/reserve/cultural-center-room-1"
                  slotsLink="/slots/cultural-center-room-1"
                />
                <FaciCard
                  title="Cultural Center Room 2"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Recitals", "Performances", "Lectures"]}
                  reserveLink="/reserve/cultural-center-room-2"
                  slotsLink="/slots/cultural-center-room-2"
                />
                <FaciCard
                  title="Cultural Center Room 3"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Recitals", "Performances", "Lectures"]}
                  reserveLink="/reserve/cultural-center-room-3"
                  slotsLink="/slots/cultural-center-room-3"
                />
              </div>
            </TabsContent>
            <TabsContent value="gymnasium">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FaciCard
                  title="Volleyball Court"
                  capacity="30 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/volleyball-court"
                  slotsLink="/slots/volleyball-court"
                />
                <FaciCard
                  title="Badminton Court"
                  capacity="30 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/badminton-court"
                  slotsLink="/slots/badminton-court"
                />
                <FaciCard
                  title="Basketball Court"
                  capacity="30 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/basketball-court"
                  slotsLink="/slots/basketball-court"
                />
                <FaciCard
                  title="Table Tennis Court"
                  capacity="10 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/table-tennis-court"
                  slotsLink="/slots/table-tennis-court"
                />
              </div>
            </TabsContent>
            <TabsContent value="openfields">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FaciCard
                  title="Plaza Pagasa"
                  capacity="100 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/plaza-pagasa"
                  slotsLink="/slots/plaza-pagasa"
                />
                <FaciCard
                  title="Soccer Field"
                  capacity="200 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/soccer-field"
                  slotsLink="/slots/soccer-field"
                />
                <FaciCard
                  title="Running Track"
                  capacity="400 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/running-track"
                  slotsLink="/slots/running-track"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default HomePage;
