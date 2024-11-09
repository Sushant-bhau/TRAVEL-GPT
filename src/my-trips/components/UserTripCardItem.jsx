import React from "react";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { PHOTO_REF_URL } from "@/service/GlobalApi";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  const [photoUrl1, setPhotoUrl] = useState("");

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[0].name);

      const PhotoUrl1 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[0].name
      );

      setPhotoUrl(PhotoUrl1);
    });
  };
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transistion-all hover:shadow-md ">
        <img
          src={photoUrl1 ? photoUrl1 : "/placeholder2.jpg"}
          className="h-[200px] w-full object-cover rounded"
        />
        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="font-bold text-sm text-gray-500">
            {trip?.userSelection.noOfDays} Days trip with
            {trip?.userSelection?.budget} Budget.
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
