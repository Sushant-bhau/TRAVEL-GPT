import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "@/service/GlobalApi";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[0].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[0].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place.placeName}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5  hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl ? photoUrl : "/imgggg.jpeg"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />

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
