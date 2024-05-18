import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import dynamic from 'next/dynamic';

const Popup = dynamic(() => import('./Popup'), { ssr: false });

interface FacilityCardProps {
  title: string;
  capacity: string;
  imageSrc: string;
  activities: string[];
  reserveLink: string;
  slotsLink?: string;
}

const FaciCard: React.FC<FacilityCardProps> = ({
  title,
  capacity,
  imageSrc,
  activities,
  reserveLink,
  slotsLink,
}) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold font-lato">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 font-libre-franklin">
            Capacity: {capacity}
          </p>
        </div>
        <img
          alt={title}
          className="rounded-lg overflow-hidden"
          height="400"
          src={imageSrc}
          style={{
            aspectRatio: '600/400',
            objectFit: 'cover',
          }}
          width="600"
        />
        <div className="flex flex-wrap gap-2">
          {activities && activities.map((activity) => (
            <Badge
              key={activity}
              className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              variant="secondary"
            >
              {activity}
            </Badge>
          ))}
        </div>
        {reserveLink && (
          <Popup />
        )}
        {slotsLink && (
          <Link href={slotsLink}>
            <Button
              className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
              variant="outline"
            >
              View Slots
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default FaciCard;
