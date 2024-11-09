import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import ImageSlider from "./slider";
import AboutUs from "./about";
function Hero() {
  const images = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img5.jpg",

    "/img8.jpg",

    "/img6.jpg",
  ];
  const images2 = ["/tra.jpg", "/tra2.jpg", "/tra3.jpg"];
  return (
    <div>
      <div className="flex flex-col items-center mx-56 gap-5  ">
        <h1 className="font-extrabold text-[50px] text-center mt-5">
          <span className="text-[#f56551]">
            Your AI-Powered Travel Companion:
          </span>{" "}
          <br />
          Crafting Tailored Adventures Just for You
        </h1>
        <p className="text-xl text-gray-500 text-center">
          Your personal trip planner and travel curator,creating custom
          itineraries tailored to your interests and budget.
        </p>

        <div className="w-full hover:transform hover:scale-105 transition-all md-56">
          <ImageSlider images={images} time={1000} />
        </div>
        <Link to={"/create-trip"}>
          <Button className="mt-4 w-80 h-15 text-xl">
            Get Started,It's Free
          </Button>
        </Link>

        <div className="w-full h-[500px] mb-[-100px]">
          <AboutUs />
        </div>
        <div className="w-full h-[300px] hover:transform hover:scale-105 transition-all md-56 mb-10">
          <ImageSlider images={images2} time={2000} />
        </div>
      </div>
      <div className="w-full h-25 flex justify-between items-center px-10 bg-gray-400">
        <h2 className=" font-bold">Copyright©️TRAVEL-GPT2024</h2>
        <h2 className=" font-bold ">
          Created by <a href="https://github.com/Sushant-bhau">Sushant_Bhau</a>
        </h2>
      </div>
    </div>
  );
}

export default Hero;
