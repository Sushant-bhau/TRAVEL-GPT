import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import ImageSlider from "./slider2";

import Footer from "./Footer";
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
    <div className="flex flex-col items-center  lg:mx-50 md:mx-50 sm:mx-50 gap-8 ">
      <h1 className="font-extrabold text-[50px] text-center mt-5 ">
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

      <ImageSlider images={images} time={1000} />

      <Link to={"/create-trip"}>
        <Button className="w-80 h-15 text-xl">Get Started,It's Free</Button>
      </Link>

      <div className="flex flex-col items-center mt-6 w-full">
        <h2 className="text-5xl font-bold mb-4 text-center">About Us</h2>
        <div className="flex  flex-col md:flex-row  items-center gap-8 max-w-5xl w-full md:mx-40 ">
          <div className="flex justify-center  transition-allhover:scale-105">
            <img
              src="/logo2.png"
              className="w-full h-[200px] mt-4 rounded-lg transition-all  hover:scale-105 "
            />
          </div>
          <div className="w-full sm:w-[300px] md:w-[500px] lg:w-[700px]">
            <p className="mb-4">
              Welcome to TRAVEL-GPT—your personal travel assistant, powered by
              advanced AI and designed to make every journey seamless, exciting,
              and tailored just for you! TRAVEL-GPT understands your travel
              needs, whether you’re planning a spontaneous weekend getaway or a
              carefully budgeted adventure for two.
            </p>
            <p className="mb-4">
              With TRAVEL-GPT, you’ll receive a meticulously crafted travel plan
              complete with handpicked hotel options, full of essential details
              like pricing, location, ratings, and nearby points of interest.
              Each itinerary is designed with care, including daily schedules,
              the best times to visit attractions, travel routes, ticket
              information, and much more, so your journey flows as smoothly as
              possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col  items-center gap-8 max-w-5xl w-full mt-10">
          <ImageSlider
            images={images2}
            time={2000}
            className="h-[1000px] w-full object-cover rounded"
          />

          <div className="flex justify-center items-center lg:w-full md:w-[1000px] sm:w-[700px]">
            <h2 className="  font-bold text-black text-xl algin-text-center mx-30 sm:w[70px]">
              Let TRAVEL-GPT plan next destination for you!
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
