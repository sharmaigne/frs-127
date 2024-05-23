import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Tags from "./components/tags";
import FacilityCard from "./components/faciCard";
import FaciTabs from "./components/faciTabs";
import { TabsContent, Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

import { testFacilities } from "../testRequests";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });

const HomePage = () => {
  const facilities = testFacilities;
  const halls = facilities.filter((facility) => facility.type === "hall");
  const classrooms = facilities.filter(
    (facility) => facility.type === "classroom"
  );
  const courts = facilities.filter((facility) => facility.type === "court");
  const fields = facilities.filter((facility) => facility.type === "field");

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
                {halls.map((facility) => (
                  <FacilityCard facility={facility} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="classrooms">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classrooms.map((facility) => (
                  <FacilityCard facility={facility} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gymnasium">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courts.map((facility) => (
                  <FacilityCard facility={facility} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="openfields">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fields.map((facility) => (
                  <FacilityCard facility={facility} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default HomePage;
