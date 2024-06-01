"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Tags from "./components/tags";
import FacilityCard from "./components/faciCard";
import FaciTabs from "./components/faciTabs";
import { TabsContent, Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

import useGetFacilities from "@/hooks/queries/useGetFacilities";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });

const HomePage = () => {
  const { data: facilities, status, error } = useGetFacilities();

  if (status === "error") {
    console.error(error);
    return <div>Error loading facilities</div>;
  }
  if (status === "pending") {
    return <div>Loading...</div>;
  }

  const halls = facilities.filter((facility) => facility.type === "hall");
  const classrooms = facilities.filter(
    (facility) => facility.type === "classroom"
  );
  const courts = facilities.filter((facility) => facility.type === "court");
  const fields = facilities.filter((facility) => facility.type === "field");

  const tabs = [
    { tab: halls, value: "halls" },
    { tab: classrooms, value: "classrooms" },
    { tab: courts, value: "gymnasium" },
    { tab: fields, value: "openfields" },
  ];

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

            {tabs.map(({ tab, value }) => {
              return (
                <TabsContent
                  key={value}
                  value={value}
                  className="flex justify-center w-full m-4 mx-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tab.map((facility) => (
                      <FacilityCard facility={facility} key={facility.facility_id} />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default HomePage;
