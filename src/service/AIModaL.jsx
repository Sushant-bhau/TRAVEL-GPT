import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with timmings  for whole day, placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing,  travelling time each of the location for 3 days with each day plan with best time to visit in just a valid JSON format.\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50-$100 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/900000/899000/898800/898860/898860_105_b.jpg",\n      "geoCoordinates": "36.1698,-115.1422",\n      "rating": "3.5 stars",\n      "description": "A budget-friendly hotel located in downtown Las Vegas, offering rooms with a retro vibe and access to the Fremont Street Experience."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$40-$80 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/900000/899000/898900/898990/898990_127_b.jpg",\n      "geoCoordinates": "36.1043,-115.1716",\n      "rating": "3 stars",\n      "description": "A family-friendly hotel with a circus theme, affordable rooms, and a variety of entertainment options."\n    },\n    {\n      "hotelName": "The Golden Gate Hotel & Casino",\n      "hotelAddress": "1 Fremont Street, Las Vegas, NV 89101",\n      "price": "$60-$120 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/900000/899000/898800/898840/898840_133_b.jpg",\n      "geoCoordinates": "36.1695,-115.1419",\n      "rating": "3.5 stars",\n      "description": "A historic hotel located in downtown Las Vegas, offering rooms with a classic feel and easy access to the Fremont Street Experience."\n    },\n    {\n      "hotelName": "The Strat Hotel, Casino & SkyPod",\n      "hotelAddress": "2000 S Las Vegas Blvd, Las Vegas, NV 89104",\n      "price": "$45-$90 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/900000/899000/898900/898960/898960_107_b.jpg",\n      "geoCoordinates": "36.1209,-115.1694",\n      "rating": "3 stars",\n      "description": "A towering hotel on the Strip with affordable rooms, a casino, and the thrilling SkyPod observation deck."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": "Day 1: Downtown Delights",\n      "plan": [\n        {\n          "time": "9:00 AM - 11:00 AM",\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A pedestrian mall with a canopy of lights and live entertainment.",\n          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/featured-carousel/public/2017-05/FremontStreetExperience.jpg",\n          "geoCoordinates": "36.1699,-115.1422",\n          "ticketPricing": "Free",\n          "travelTime": "N/A (walking distance)",\n          "description": "Start your day with a walk through the Fremont Street Experience. Enjoy the vibrant atmosphere, free live music, and the dazzling light show. It\'s best during the day to experience the full effect of the canopy lights."\n        },\n        {\n          "time": "11:00 AM - 1:00 PM",\n          "placeName": "Neon Museum",\n          "placeDetails": "A museum showcasing historic neon signs from Las Vegas.",\n          "placeImageUrl": "https://www.neonmuseum.org/wp-content/uploads/2023/03/Neon-Museum-Las-Vegas-Sign-1.jpg",\n          "geoCoordinates": "36.1705,-115.1469",\n          "ticketPricing": "$20-$30 per person",\n          "travelTime": "10-15 minutes (walking distance)",\n          "description": "Explore the fascinating history of Las Vegas through its iconic neon signs. Take a guided tour or wander through the museum on your own.  Consider visiting during the cooler hours, like mornings or evenings."\n        },\n        {\n          "time": "1:00 PM - 2:00 PM",\n          "placeName": "Lunch at a local cafe",\n          "placeDetails": "Enjoy a casual lunch at a cafe in downtown Las Vegas.",\n          "placeImageUrl": "https://www.lasvegas.com/sites/default/files/styles/hero_mobile/public/2017-12/Las-Vegas-Restaurants.jpg",\n          "geoCoordinates": "36.1699,-115.1422",\n          "ticketPricing": "Varies",\n          "travelTime": "N/A (walking distance)",\n          "description": "Grab a bite to eat at a local cafe in downtown Las Vegas. You can find plenty of affordable options with delicious food."\n        },\n        {\n          "time": "2:00 PM - 4:00 PM",\n          "placeName": "Golden Nugget Aquarium",\n          "placeDetails": "A unique aquarium featuring a massive shark tank and various marine life.",\n          "placeImageUrl": "https://www.goldennugget.com/images/default-source/attractions/golden-nugget-aquarium-main.jpg?sfvrsn=2",\n          "geoCoordinates": "36.1691,-115.1423",\n          "ticketPricing": "Free with hotel stay or casino play",\n          "travelTime": "5-10 minutes (walking distance)",\n          "description": "Visit the Golden Nugget Aquarium, home to a variety of fish, sharks, and other marine creatures. It\'s a fun and free activity for all ages."\n        },\n        {\n          "time": "4:00 PM - 6:00 PM",\n          "placeName": "Free Show at a Casino",\n          "placeDetails": "Catch a free show at one of the casinos on the Strip.",\n          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/featured-carousel/public/2017-12/LasVegasShow.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Free",\n          "travelTime": "20-30 minutes (by car or bus)",\n          "description": "Many casinos on the Strip offer free shows in the evenings. Check the schedules and enjoy a dazzling performance.  Evening shows are the most popular, so arrive early."\n        },\n        {\n          "time": "6:00 PM - 8:00 PM",\n          "placeName": "Dinner at a Buffet",\n          "placeDetails": "Enjoy a budget-friendly dinner at a casino buffet.",\n          "placeImageUrl": "https://www.lasvegas.com/sites/default/files/styles/hero_mobile/public/2017-12/Las-Vegas-Restaurants.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Varies",\n          "travelTime": "N/A (usually at the same casino as the show)",\n          "description": "Buffets are a great way to enjoy a variety of food at an affordable price. Many casinos offer buffets for dinner.  Consider going for an early dinner to avoid crowds."\n        },\n        {\n          "time": "8:00 PM - 10:00 PM",\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A pedestrian mall with a canopy of lights and live entertainment.",\n          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/featured-carousel/public/2017-05/FremontStreetExperience.jpg",\n          "geoCoordinates": "36.1699,-115.1422",\n          "ticketPricing": "Free",\n          "travelTime": "20-30 minutes (by car or bus)",\n          "description": "Enjoy the vibrant atmosphere of Fremont Street Experience at night. Witness the dazzling light show and soak in the energy. It\'s best after dark when the lights really come alive."\n        }\n      ]\n    },\n    {\n      "day": "Day 2: Red Rock Canyon and The Strip",\n      "plan": [\n        {\n          "time": "9:00 AM - 12:00 PM",\n          "placeName": "Red Rock Canyon National Conservation Area",\n          "placeDetails": "A scenic desert landscape with hiking trails and rock formations.",\n          "placeImageUrl": "https://www.nps.gov/media/photo/content/2016/11/10/fc16b6f0-78c8-420a-a8e5-0495b69245e7.jpg",\n          "geoCoordinates": "36.1133,-115.3691",\n          "ticketPricing": "$15 per vehicle",\n          "travelTime": "30-45 minutes (by car)",\n          "description": "Escape the city and enjoy the natural beauty of Red Rock Canyon. Hike one of the trails, take scenic drives, and admire the stunning rock formations.  Early mornings and late afternoons are ideal to avoid the heat."\n        },\n        {\n          "time": "12:00 PM - 2:00 PM",\n          "placeName": "Lunch at a Picnic Spot",\n          "placeDetails": "Pack a picnic lunch and enjoy it at a scenic spot in Red Rock Canyon.",\n          "placeImageUrl": "https://www.nps.gov/media/photo/content/2016/11/10/fc16b6f0-78c8-420a-a8e5-0495b69245e7.jpg",\n          "geoCoordinates": "36.1133,-115.3691",\n          "ticketPricing": "Free",\n          "travelTime": "N/A (within Red Rock Canyon)",\n          "description": "Enjoy a relaxing picnic lunch amidst the stunning views of Red Rock Canyon. Seek out shaded areas for a comfortable experience."\n        },\n        {\n          "time": "2:00 PM - 5:00 PM",\n          "placeName": "The Strip (Las Vegas Boulevard)",\n          "placeDetails": "A world-famous street with casinos, hotels, and entertainment.",\n          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/featured-carousel/public/2017-11/TheStrip.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Free to walk",\n          "travelTime": "30-45 minutes (by car)",\n          "description": "Stroll down the iconic Strip and soak in the vibrant atmosphere. Admire the architecture of the casinos and hotels, and enjoy the energy of this world-famous destination.  Late afternoons or early evenings are ideal for a pleasant walk."\n        },\n        {\n          "time": "5:00 PM - 6:00 PM",\n          "placeName": "Bellagio Fountains",\n          "placeDetails": "A spectacular water and music show.",\n          "placeImageUrl": "https://www.bellagio.com/media/img/bellagio-fountains-hero.jpg",\n          "geoCoordinates": "36.1147,-115.1732",\n          "ticketPricing": "Free",\n          "travelTime": "N/A (on the Strip)",\n          "description": "Catch the Bellagio Fountains show for a dazzling display of water and music. It\'s a free and breathtaking experience. Shows run every 15 minutes, especially spectacular at night."\n        },\n        {\n          "time": "6:00 PM - 8:00 PM",\n          "placeName": "Dinner at a Cheap Eatery on the Strip",\n          "placeDetails": "Find a budget-friendly restaurant on the Strip for dinner.",\n          "placeImageUrl": "https://www.lasvegas.com/sites/default/files/styles/hero_mobile/public/2017-12/Las-Vegas-Restaurants.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Varies",\n          "travelTime": "N/A (on the Strip)",\n          "description": "Enjoy a casual dinner at a more affordable restaurant on the Strip. You can find plenty of options with delicious food."\n        },\n        {\n          "time": "8:00 PM - 10:00 PM",\n          "placeName": "Free Concert or Show",\n          "placeDetails": "Check for free concerts or shows happening on the Strip.",\n          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/featured-carousel/public/2017-12/LasVegasShow.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Free",\n          "travelTime": "N/A (usually at a casino or venue on the Strip)",\n          "description": "Many casinos and venues on the Strip offer free concerts or shows. Check the schedules and enjoy a fun night out."\n        }\n      ]\n    },\n    {\n      "day": "Day 3: The Strip and Beyond",\n      "plan": [\n        {\n          "time": "9:00 AM - 11:00 AM",\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "A stunning indoor garden with seasonal displays of flowers and sculptures.",\n          "placeImageUrl": "https://www.bellagio.com/media/img/bellagio-conservatory-botanical-gardens.jpg",\n          "geoCoordinates": "36.1147,-115.1732",\n          "ticketPricing": "Free",\n          "travelTime": "N/A (on the Strip)",\n          "description": "Start your day by exploring the beautiful Bellagio Conservatory and Botanical Garden. Admire the seasonal displays and take in the tranquil atmosphere."\n        },\n        {\n          "time": "11:00 AM - 1:00 PM",\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "An outdoor shopping and dining promenade with a High Roller observation wheel.",\n          "placeImageUrl": "https://www.caesars.com/content/dam/caesars-entertainment/the-linq/home/hero/high-roller-hero-mobile.jpg",\n          "geoCoordinates": "36.1136,-115.1735",\n          "ticketPricing": "Free to walk, High Roller tickets are $25-$35 per person",\n          "travelTime": "N/A (on the Strip)",\n          "description": "Walk along the LINQ Promenade, a lively outdoor space with shops, restaurants, and the iconic High Roller observation wheel.  Consider going during the day for better views from the High Roller."\n        },\n        {\n          "time": "1:00 PM - 2:00 PM",\n          "placeName": "Lunch at a Food Court",\n          "placeDetails": "Enjoy a casual lunch at one of the food courts on the Strip.",\n          "placeImageUrl": "https://www.lasvegas.com/sites/default/files/styles/hero_mobile/public/2017-12/Las-Vegas-Restaurants.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Varies",\n          "travelTime": "N/A (usually within the LINQ or nearby casinos)",\n          "description": "Grab a quick and affordable lunch at one of the food courts on the Strip. You can find a variety of options to choose from."\n        },\n        {\n          "time": "2:00 PM - 4:00 PM",\n          "placeName": "The Venetian and The Palazzo",\n          "placeDetails": "A luxury resort complex with a replica of Venice, including canals and gondola rides.",\n          "placeImageUrl": "https://www.venetian.com/media/img/venetian-gondolas.jpg",\n          "geoCoordinates": "36.1142,-115.1759",\n          "ticketPricing": "Free to enter, gondola rides available for a fee",\n          "travelTime": "N/A (on the Strip)",\n          "description": "Take a walk through The Venetian and The Palazzo, a stunning replica of Venice with canals and gondola rides. You can also enjoy shopping and dining in this luxurious environment."\n        },\n        {\n          "time": "4:00 PM - 6:00 PM",\n          "placeName": "Free Show at a Casino",\n          "placeDetails": "Catch a free show at one of the casinos on the Strip.",\n          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/featured-carousel/public/2017-12/LasVegasShow.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Free",\n          "travelTime": "N/A (usually at the same casino as the Venetian or a nearby one)",\n          "description": "Many casinos on the Strip offer free shows in the evenings. Check the schedules and enjoy a dazzling performance.  Evening shows are the most popular, so arrive early."\n        },\n        {\n          "time": "6:00 PM - 8:00 PM",\n          "placeName": "Dinner at a Casual Restaurant",\n          "placeDetails": "Enjoy a casual dinner at a restaurant off the Strip.",\n          "placeImageUrl": "https://www.lasvegas.com/sites/default/files/styles/hero_mobile/public/2017-12/Las-Vegas-Restaurants.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Varies",\n          "travelTime": "15-20 minutes (by car or bus)",\n          "description": "Find a casual and affordable restaurant off the Strip for dinner. You can find plenty of options with delicious food."\n        },\n        {\n          "time": "8:00 PM - 10:00 PM",\n          "placeName": "Free Outdoor Entertainment",\n          "placeDetails": "Enjoy free outdoor entertainment on the Strip or downtown.",\n          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/featured-carousel/public/2017-12/LasVegasShow.jpg",\n          "geoCoordinates": "36.1147,-115.1723",\n          "ticketPricing": "Free",\n          "travelTime": "15-20 minutes (by car or bus)",\n          "description": "Check for free outdoor events like street performances, live music, or movie screenings on the Strip or in downtown Las Vegas."\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Key Points:**\n\n- **Hotel Options:**  The list includes budget-friendly hotels in both downtown Las Vegas and on the Strip.\n- **Itinerary:**  Each day offers a mix of attractions, free activities, and dining options to suit a cheap budget.\n- **Timing Suggestions:**  The itinerary includes best times to visit specific locations to avoid crowds, heat, or limited availability.\n- **Place Details:**  Includes relevant information such as ticket prices, travel times, and descriptions for each location.\n- **Image URLs:**  Provides visual references for each attraction.\n\n**Remember:** \n\n- **Transportation:**  Las Vegas is car-friendly, but consider using public transportation, ride-sharing services, or walking for shorter distances to save money.\n- **Food & Drinks:**  Look for deals, happy hour specials, and budget-friendly restaurants.\n- **Free Activities:**  Las Vegas offers many free attractions and activities. \n- **Flexibility:**  Be flexible with your schedule and explore spontaneous opportunities.\n\nThis itinerary offers a starting point for a cheap and enjoyable 3-day trip to Las Vegas.  Adjust the plan based on your interests and preferences for a customized experience! \n',
        },
      ],
    },
  ],
});
