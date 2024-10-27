import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
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

  const onGenerateTrip = () => {
    if (
      (formData?.noOfDays > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData?.travelers
    ) {
      toast("Please fill the the details!");
      return;
    }
    console.log(formData);
  };
  return (
    <div className=" ml-40 mr-40 sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 flex flex-col  align-center ">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information and our trip planning tool will
        create a customized itinerary based on your preferences.
      </p>
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
            For how many days are you planning the trip?
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
            Who do you plan to travel with on this trip?
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
        <Button onClick={onGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
