import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center mt-6 w-full">
      <h2 className="text-5xl font-bold mb-4 text-center">About Us</h2>
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl w-full ">
        <div className="flex justify-center  transition-allhover:scale-105">
          <img
            src="/logo2.png"
            className="w-full h-[200px] mt-4 rounded-lg transition-all  hover:scale-105"
          />
        </div>
        <div className="  w-[700px] ">
          <p className="mb-4">
            Welcome to TRAVEL-GPT—your personal travel assistant, powered by
            advanced AI and designed to make every journey seamless, exciting,
            and tailored just for you! TRAVEL-GPT understands your travel needs,
            whether you’re planning a spontaneous weekend getaway or a carefully
            budgeted adventure for two.
          </p>
          <p className="mb-4">
            With TRAVEL-GPT, you’ll receive a meticulously crafted travel plan
            complete with handpicked hotel options, full of essential details
            like pricing, location, ratings, and nearby points of interest. Each
            itinerary is designed with care, including daily schedules, the best
            times to visit attractions, travel routes, ticket information, and
            much more, so your journey flows as smoothly as possible.
          </p>
        </div>
      </div>
      <div className="ml-[-30px]">
        <h2 className=" font-bold text-black text-2xl">
          Let TRAVEL-GPT bring your next destination to life!
        </h2>
      </div>
    </section>
  );
};

export default AboutUs;
