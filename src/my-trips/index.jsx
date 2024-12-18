import { useEffect, useState } from "react";
import { db } from "@/service/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import react from "react";
import { useNavigation } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";
import Footer from "./Footer";
function Mytrips() {
  useEffect(() => {
    GetUserTrips();
  }, []);
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  const deleteTrip = async (tripId) => {
    try {
      await deleteDoc(doc(db, "AITrips", tripId));
      setUserTrips((prevTrips) =>
        prevTrips.filter((trip) => trip.id !== tripId)
      );
    } catch (error) {
      console.error("Error deleting trip: ", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
          <h2 className="font-bold text-3xl">My Trips</h2>

          <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
            {userTrips?.length > 0
              ? userTrips.map((trip, index) => (
                  <UserTripCardItem
                    trip={trip}
                    key={index}
                    onDelete={() => deleteTrip(trip.id)}
                  />
                ))
              : [1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="h-[200px] w-full bg-slate-200 animate-pulse rounded-xl"
                  ></div>
                ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mytrips;
