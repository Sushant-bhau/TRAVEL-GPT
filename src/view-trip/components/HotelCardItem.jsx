import React from "react";
import { PiMapPinFill } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { PHOTO_REF_URL } from "@/service/GlobalApi";
function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName,
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
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl ? photoUrl : "/imggg.jpeg"}
          className="rounded-xl h-[180px] w-full object-cover"
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel.hotelName}</h2>

          <h2 className="text-xs text-gray-700 flex items-center">
            <div className="flex items-topline">
              <PiMapPinFill
                className="text-red-800 w-10 h-7"
                style={{ marginBottom: "-0.3px" }}
              />
              {hotel.hotelAddress}
            </div>
          </h2>

          <h2 className="text-xs text-gray-700 flex items-center">
            <FcMoneyTransfer className=" w-10 h-7" />
            {hotel?.price}
          </h2>
          <h2 className="text-xs text-gray-700 flex items-center">
            <IoStarHalfOutline className=" text-yellow-500 w-10 h-5" />
            {hotel?.rating}/5 star rating
          </h2>
          <p className="  text-xs text-gray-500">
            <div className="flex items-topline">
              <IoInformationCircleSharp className=" text-blue-500 w-10 text-xl mr-2" />
              {hotel.description}
            </div>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
