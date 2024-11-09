import { Button } from "@/components/ui/button";
import { FcShare } from "react-icons/fc";
import React from "react";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { PHOTO_REF_URL } from "@/service/GlobalApi";
import ImageSlider from "@/components/ui/custom/slider";
export const InfoSection = ({ trip }) => {
  const [photoUrl1, setPhotoUrl1] = useState("");
  const [photoUrl2, setPhotoUrl2] = useState("");
  const [photoUrl3, setPhotoUrl3] = useState("");
  const [photoUrl4, setPhotoUrl4] = useState("");
  const [photoUrl5, setPhotoUrl5] = useState("");
  const [photoUrl6, setPhotoUrl6] = useState("");
  const [photoUrl7, setPhotoUrl7] = useState("");
  const [photoUrl8, setPhotoUrl8] = useState("");
  const [photoUrl9, setPhotoUrl9] = useState("");
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
      const PhotoUrl2 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[1].name
      );
      const PhotoUrl3 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[2].name
      );
      const PhotoUrl4 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      const PhotoUrl5 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[4].name
      );
      const PhotoUrl6 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[5].name
      );
      const PhotoUrl7 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[6].name
      );
      const PhotoUrl8 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[7].name
      );
      const PhotoUrl9 = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[8].name
      );

      setPhotoUrl1(PhotoUrl1);
      setPhotoUrl2(PhotoUrl2);
      setPhotoUrl3(PhotoUrl3);
      setPhotoUrl4(PhotoUrl4);
      setPhotoUrl5(PhotoUrl5);
      setPhotoUrl6(PhotoUrl6);
      setPhotoUrl7(PhotoUrl7);
      setPhotoUrl8(PhotoUrl8);
      setPhotoUrl9(PhotoUrl9);
    });
  };
  const img1 = photoUrl1 ? photoUrl1 : "/placeholder2.jpg";
  const img2 = photoUrl2 ? photoUrl2 : "/placeholder2.jpg";
  const img3 = photoUrl3 ? photoUrl3 : "/placeholder2.jpg";
  const img4 = photoUrl4 ? photoUrl4 : "/placeholder2.jpg";
  const img5 = photoUrl5 ? photoUrl5 : "/placeholder2.jpg";
  const img6 = photoUrl6 ? photoUrl6 : "/placeholder2.jpg";
  const img7 = photoUrl7 ? photoUrl7 : "/placeholder2.jpg";
  const img8 = photoUrl8 ? photoUrl8 : "/placeholder2.jpg";
  const img9 = photoUrl9 ? photoUrl9 : "/placeholder2.jpg";

  const images1 = [img1, img2, img3];
  const images2 = [img4, img5, img6];
  const images3 = [img7, img8, img9];
  return (
    <div>
      <div className=" justify-center flex items-center mb-3">
        <h2 className="font-bold text-3xl mr-2">Your Itinerary is Ready!</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ImageSlider
          images={images1}
          time={3000}
          className="h-[200px] w-full object-cover rounded"
        />
        <ImageSlider
          images={images2}
          time={4000}
          className="h-[200px] w-full object-cover rounded"
        />
        <ImageSlider
          images={images3}
          time={5000}
          className="h-[200px] w-full object-cover rounded"
        />
        {/* <img
          src={photoUrl1}
          className="h-[200px] w-full object-cover rounded"
        />
        <img
          src={photoUrl2}
          className="h-[200px] w-full object-cover rounded"
        />
        <img
          src={photoUrl3}
          className="h-[200px] w-full object-cover rounded"
        /> */}
      </div>
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
      </div>
    </div>
  );
};
