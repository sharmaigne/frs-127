"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import FacilityDetails from "./FacilityDetails";
import SimilarFacilities from "./SimilarFacilities";
import { Facility } from "@/lib/types";

const FacilityPopup = ({facility}: {facility: Facility["Row"]}) => {
  const [isOpen, setIsOpen] = useState(false);

  const similarFacilities = [
    {
      name: "Acme Event Center",
      location: "123 Main St, Anytown USA 12345",
      capacity: "300 people",
      image_url: "/path/to/image1.jpg",
    },
    {
      name: "Anytown Convention Center",
      location: "456 Oak St, Anytown USA 54321",
      capacity: "800 people",
      image_url: "/path/to/image2.jpg",
    },
    {
      name: "Citywide Event Hall",
      location: "789 Elm St, Anytown USA 67890",
      capacity: "400 people",
      image_url: "/path/to/image3.jpg",
    },
  ];

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        View Facility
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[1200px] max-h-[90vh] overflow-auto">
          <FacilityDetails facility={facility} />
          <SimilarFacilities facilities={similarFacilities} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FacilityPopup;
