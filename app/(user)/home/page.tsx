import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Tags from "./components/tags";
import FacilityCard from "./components/faciCard";
import FaciTabs from "./components/faciTabs";
import { TabsContent, Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import('./components/Hero'), { ssr: false })

const HomePage = () => {
  return (
    <>
      {/* HEADER */}
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
                <FacilityCard
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
                <FacilityCard
                  title="Lemito Hall"
                  capacity="100 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Weddings", "Galas", "Formal Dinners", "Dances"]}
                  reserveLink="/reserve/lemito-hall"
                />
                <FacilityCard
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
                <FacilityCard
                  title="Mini Theater 1"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Weddings", "Receptions", "Banquets", "Galas"]}
                  reserveLink="/reserve/mini-theater-1"
                  slotsLink="/slots/mini-theater-1"
                />
                <FacilityCard
                  title="Mini Theater 2"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Recitals", "Performances", "Lectures"]}
                  reserveLink="/reserve/mini-theater-2"
                  slotsLink="/slots/mini-theater-2"
                />
                <FacilityCard
                  title="CSM Audio-Visual Room"
                  capacity="80 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Recitals", "Performances", "Lectures"]}
                  reserveLink="/reserve/csm-audio-visual-room"
                  slotsLink="/slots/csm-audio-visual-room"
                />
                <FacilityCard
                  title="Cultural Center Room 1"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Weddings", "Receptions", "Banquets", "Galas"]}
                  reserveLink="/reserve/cultural-center-room-1"
                  slotsLink="/slots/cultural-center-room-1"
                />
                <FacilityCard
                  title="Cultural Center Room 2"
                  capacity="50 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Recitals", "Performances", "Lectures"]}
                  reserveLink="/reserve/cultural-center-room-2"
                  slotsLink="/slots/cultural-center-room-2"
                />
                <FacilityCard
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
                <FacilityCard
                  title="Volleyball Court"
                  capacity="30 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/volleyball-court"
                  slotsLink="/slots/volleyball-court"
                />
                <FacilityCard
                  title="Badminton Court"
                  capacity="30 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/badminton-court"
                  slotsLink="/slots/badminton-court"
                />
                <FacilityCard
                  title="Basketball Court"
                  capacity="30 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/basketball-court"
                  slotsLink="/slots/basketball-court"
                />
                <FacilityCard
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
                <FacilityCard
                  title="Plaza Pagasa"
                  capacity="100 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/plaza-pagasa"
                  slotsLink="/slots/plaza-pagasa"
                />
                <FacilityCard
                  title="Soccer Field"
                  capacity="200 people"
                  imageSrc="./images/atrium.jpg"
                  activities={["Basketball", "Volleyball", "Badminton"]}
                  reserveLink="/reserve/soccer-field"
                  slotsLink="/slots/soccer-field"
                />
                <FacilityCard
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
