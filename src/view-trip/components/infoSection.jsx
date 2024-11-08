import { Button } from "@/components/ui/button";
import { FcShare } from "react-icons/fc";
import React from "react";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";
const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
export const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[1].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[1].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <div>
      <img src={photoUrl} className="h-[340px] w-full object-cover rounded" />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📅{trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md ">
              💸{trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md ">
              🍻No. of Travelers: {trip?.userSelection?.travelers}
            </h2>
          </div>
        </div>
        <Button className="bg-white border border-gray-950 hover:bg-gray-300">
          <FcShare />
        </Button>
      </div>
    </div>
  );
};
