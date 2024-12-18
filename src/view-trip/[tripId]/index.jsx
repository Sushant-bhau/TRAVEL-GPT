import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { InfoSection } from "@/view-trip/components/InfoSection";
import { Hotels } from "@/view-trip/components/Hotels";
import { PlacesToVisit } from "../components/PlacesToVisit";
import Footer2 from "../components/Footer2";

const Viewtrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);
  /*
  used to get trip information from the firestore
   */
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast("No trip Found!");
    }
  };
  return (
    <div className="w-full">
      <div className="p-10 md:px-20 lg:px-44 xl:px-56 mx-15 ">
        {/* information section*/}
        <InfoSection trip={trip} />
        {/* Recommended Hotels */}
        <Hotels trip={trip} />
        {/* Daily Plan */}
        <PlacesToVisit trip={trip} />
        {/*footer */}
      </div>
      <div className=" mt-5 my-10 ml-20">
        <Footer2 />
      </div>

      <img src="/thanks2.jpg" alt="" className="w-full h-[100px]" />

      <div className="w-full h-[50px] flex justify-between items-center px-10 bg-black text-white">
        <h2 className=" font-bold">Copyright©️TRAVEL-GPT2024</h2>
        <h2 className=" font-bold ">
          Created by <a href="https://github.com/Sushant-bhau">Sushant_Bhau</a>
        </h2>
      </div>
    </div>
  );
};

export default Viewtrip;
