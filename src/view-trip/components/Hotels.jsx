import React from "react";
import { PiMapPinFill } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";
import HotelCardItem from "./HotelCardItem";
export const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl  my-5 ">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
