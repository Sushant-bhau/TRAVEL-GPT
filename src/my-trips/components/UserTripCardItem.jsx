import React from "react";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { PHOTO_REF_URL } from "@/service/GlobalApi";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function UserTripCardItem({ trip, onDelete }) {
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
    <div>
      <div>
        <img
          src={photoUrl1 ? photoUrl1 : "/placeholder2.jpg"}
          className="h-[200px] w-full object-cover rounded"
        />

        <div className="flex flex-row justify-between mt-2">
          <div>
            <h2 className="font-bold text-lg">
              {trip?.userSelection?.location?.label}
            </h2>
            <h2 className="font-bold text-sm text-gray-500">
              {trip?.userSelection.noOfDays} Days trip with
              {trip?.userSelection?.budget} Budget.
            </h2>
          </div>
          <div>
            <Link to={"/view-trip/" + trip?.id}>
              <Button className="bg-gray-50 hover:bg-gray-50 hover:scale-105 transistion-all  hover:border-gray-50 ">
                <img src="forward.png" className="w-8 h-8" />
              </Button>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                onDelete();
              }}
              className="bg-gray-50  hover:scale-105 transistion-all  hover:border-gray-50 "
            >
              <img src="trash.png" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTripCardItem;
