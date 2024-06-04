"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import FacilityDetails from "./FacilityDetails";
import SimilarFacilities from "./SimilarFacilities";
import useGetSimilarFacilities from "@/hooks/queries/useGetSimilarFacilities";
import { Facility } from "@/lib/types";

const FacilityPopup = ({ facility }: { facility: Facility["Row"] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data = [], error, status } = useGetSimilarFacilities(facility);

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        View Facility
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[1200px] max-h-[90vh] overflow-auto">
          <FacilityDetails facility={facility} />
          <SimilarFacilities facilities={data} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FacilityPopup;
