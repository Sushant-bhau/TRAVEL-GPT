import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { chatSession } from "@/service/AIModaL";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelsList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { db } from "@/service/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (name, value) => {
    if (name == "noOfDays" && value > 15) {
      console.log("Please enter Trip Days less than 15");
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: " Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp?.data));
        setOpenDailog(false);
        onGenerateTrip();
      });
  };

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDailog(true);
      return;
    }

    if (
      (formData?.noOfDays > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData?.travelers
    ) {
      toast("Please fill the the details!");
      return;
    }
    console.log(formData);
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.travelers)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);
    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log("--", await result?.response?.text()); // Await the response text
    const responseText = await result?.response?.text();
    setLoading(false);
    console.log(responseText);

    SaveAiTrip(responseText);
  };
  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();

    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate(`/view-trip/${docId}`);
  };

  return (
    <div className="w-full">
      <div className=" lg:ml-30 lg:mr-30 sm:px-1 md:px-5 lg:px-56  sm:ml-10 sm:mr-10 md:ml-10 md:mr-10  xl:px-10 px-5 mt-10 flex flex-col  align-center ">
        <div className=" flex flex-row  align-center gap-5">
          <div>
            <img
              src="/travel.jpg"
              className="w-[400px] h-[200px] sm:h-[200px] md:h-[200px] hover:scale-105 transition-full rounded-md"
            />
          </div>
          <div className="mt-10">
            <h2 className="  font-bold text-3xl">
              Tell us your travel preferences
            </h2>
            <p className="mt-3 text-gray-500 text-xl">
              Just provide some basic information and our trip planning tool
              will create a customized itinerary based on your preferences.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-10">
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <div>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange: (v) => {
                  setPlace(v);
                  handleInputChange("location", v);
                },
              }}
              // Ensures full width
            />
          </div>

          <div>
            <h2 className="text-xl my-3 font-medium">
              For how many days are you planning the trip?{" "}
              <h2 className="text-gray-500 text-sm">(min:1,max:10)</h2>
            </h2>
            <Input
              placeholder={"Ex.3"}
              type="number"
              onChange={(e) => handleInputChange("noOfDays", e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("budget", item.title)}
                  className={`p-4 border  rounded-lg hover:bg-gray-200  cursor-pointer w-full
                  ${formData?.budget == item.title && "shadow-lg border-black"}
                `}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc} </h2>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl my-3 font-medium">
              Who do you plan to travel with, On this trip?
            </h2>
            <div className="grid grid-cols-4 gap-5 mt-5  ">
              {SelectTravelsList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("travelers", item.people)}
                  className={`p-4 border  rounded-lg hover:bg-gray-200 cursor-pointer w-full
                  ${
                    formData?.travelers == item.people &&
                    "shadow-lg border-black"
                  }
                  `}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc} </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 md-10 justify-center  flex">
          <Button disabled={loading} onClick={onGenerateTrip}>
            {loading ? (
              <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
            ) : (
              "Generate Trip"
            )}
          </Button>
        </div>
        <Dialog open={openDailog}>
          <DialogContent>
            <DialogHeader className="flex justify-between items-center  flex-row ">
              <DialogTitle className=" font-bold ml-36 mr-10 mt-4 md-3">
                Just One Step Away
              </DialogTitle>
              <DialogClose
                onClick={() => setOpenDailog(false)}
                className="text-white bg-red-500 p-2 rounded-xs w-10"
              >
                X
              </DialogClose>
            </DialogHeader>
            <DialogDescription>
              <img
                src="/logo.jpeg"
                className="h-[300px] w-[500px] justify-center border-2 border-black rounded"
              />
              <h2 className="font-bold text-lg mt-7 text-black">
                Sign In With Google{" "}
              </h2>
              <p>Sign in to the App with Google authentication securly</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-10 w-10" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full h-[50px] flex justify-between items-center px-10 bg-black text-white">
        <h2 className=" font-bold">Copyright©️TRAVEL-GPT2024</h2>
        <h2 className=" font-bold ">
          Created by <a href="https://github.com/Sushant-bhau">Sushant_Bhau</a>
        </h2>
      </div>
    </div>
  );
}

export default CreateTrip;
