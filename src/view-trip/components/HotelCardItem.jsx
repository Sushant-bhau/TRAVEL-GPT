import React from "react";
import { PiMapPinFill } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";
function HotelCardItem({ hotel }) {
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
        <img src="/placeholder2.png" className="rounded-xl" />
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
