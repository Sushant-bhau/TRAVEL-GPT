import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { ImLocation2 } from "react-icons/im";

function PlaceCardItem({ place }) {
  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place.placeName}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5  hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img src="/placeholder2.png" className="w-[130px] h-[130] rounded-xl" />

        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.placeDetails}</p>
          {place?.travelTime !== "N/A" && (
            <h2 className="text-sm font-bold">
              ⌛ Travelling Time: {place?.travelTime}
            </h2>
          )}
          {/* <Button>
          <ImLocation2 />
        </Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
