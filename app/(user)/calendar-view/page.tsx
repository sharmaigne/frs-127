"use client";
import { CalendarBig } from "@/components/ui/calendar_big";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import moment from "moment";

import useGetAcceptedEvents from "@/hooks/queries/useGetAcceptedEvents";

const CalendarViewPage = () => {
  const dateFormat = "LL";
  const { data: events, status } = useGetAcceptedEvents();
  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>Error fetching data</div>;

  return (
    <div className="flex">
      <CalendarBig />
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4 overflow-auto">
        <div className="grid gap-4">
          <div className="flex-col items-center justify-between">
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
            <Link
              href="#"
              className="text-primary hover:underline"
              prefetch={false}
            >
              View all
            </Link>
          </div>
          {events.map((event) => (
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-full bg-primary/10 w-10 h-10 text-primary flex items-center justify-center">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{event.event_name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {moment(event.timestamp_start).format(dateFormat)} - 
                  {moment(event.timestamp_end).format(dateFormat)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarViewPage;
