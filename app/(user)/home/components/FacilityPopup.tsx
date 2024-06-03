"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import FacilityDetails from "./FacilityDetails"
import SimilarFacilities from "./SimilarFacilities"


    const FacilityPopup: React.FC = () => {
        const [isOpen, setIsOpen] = useState(false);

  const facility = {
    name: "Acme Conference Center",
    location: "123 Main St, Anytown USA 12345",
    capacity: "500 people",
    type: "Hall",
    description: "The Acme Conference Center is a state-of-the-art facility located in the heart of Anytown. With a capacity of 500 people and 10,000 square feet of space, it's the perfect venue for your next event. Equipped with high-speed WiFi, catering services, and top-of-the-line AV equipment, the Acme Conference Center is the ideal choice for conferences, meetings, and more.",
    image_url: "/path/to/image.jpg",
    facility_manager: "John Doe",
    facility_manager_email: "prhufana@gmail.com"
  };

  const similarFacilities = [
    {
      name: "Acme Event Center",
      location: "123 Main St, Anytown USA 12345",
      capacity: "300 people",
      image_url: "/path/to/image1.jpg"
    },
    {
      name: "Anytown Convention Center",
      location: "456 Oak St, Anytown USA 54321",
      capacity: "800 people",
      image_url: "/path/to/image2.jpg"
    },
    {
      name: "Citywide Event Hall",
      location: "789 Elm St, Anytown USA 67890",
      capacity: "400 people",
      image_url: "/path/to/image3.jpg"
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
