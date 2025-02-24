"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import TravelCard from "@/components/TravelCard";

const places = [
  {
    name: "Eiffel Tower",
    image: "/eiffel.png",
    description:
      "An iconic landmark in Paris, France, known for its stunning architecture and breathtaking views.",
  },
  {
    name: "Great Wall of China",
    image: "/greatwall.png",
    description:
      "One of the greatest wonders of the world, stretching thousands of miles across China.",
  },
  {
    name: "Taj Mahal",
    image: "/tajmahal.png",
    description:
      "A symbol of love in India, the Taj Mahal is a breathtaking marble mausoleum.",
  },
];

const travelData = [
  {
    city: "Toshkentdan",
    image: "/jpg14.jpg", 
    flights: [
      { destination: "Moskva", price: "3 125 670" },
      { destination: "Istanbul", price: "11 453 300" },
      { destination: "Sankt-Peterburg", price: "3 191 150" },
      { destination: "Dubay", price: "1 500" },
    ],
  },
  {
    city: "Samarqanddan",
    image: "/jpg6.jpg",
    flights: [
      { destination: "Moskva", price: "3 617 400" },
      { destination: "Sankt-Peterburg", price: "3 346 470" },
      { destination: "Istanbul", price: "3 322 990" },
      { destination: "Sochi", price: "4 229 740" },
    ],
  },
  {
    city: "Farg'onadan",
    image: "/jpg2.jpg",
    flights: [
      { destination: "Moskva", price: "2 977 940" },
      { destination: "Стамбул", price: "3 563 010" },
      { destination: "Novosibirsk", price: "5 492 290" },
      { destination: "Санкт-Петербург", price: "3 469 890" },
    ],
  },
  {
    city: "Namangandan",
    image: "/jpg19.jpg",
    flights: [
      { destination: "Moskva", price: "6 734 710" },
      { destination: "Санкт-Петербург", price: "9 546 170" },
      { destination: "Ekaterinburg", price: "5 461 720" },
      { destination: "Новосибирск", price: "9 463 460" },
    ],
  },
];

export default function Destinations() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-4xl font-bold  mb-6">
        Dunyo bo'ylab tashrif buyurish kerak bo'lgan joylar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div key={index} className="relative group cursor-pointer">
            <Image
              src={place.image}
              alt={place.name}
              width={341}
              height={511}
              className="rounded-lg "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <button
                onClick={() => setSelectedPlace(place)}
                className="bg-[#3d3990] text-white px-4 py-2 rounded-md"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative">
            <button
              onClick={() => setSelectedPlace(null)}
              className="absolute top-4 right-4 text-gray-600 text-2xl"
            >
              <AiOutlineClose />
            </button>
            {/* <Image
              src={selectedPlace.image}
              alt={selectedPlace.name}
              width={500}
              height={350}
              className="rounded-lg"
            /> */}
            <h3 className="text-2xl font-bold text-gray-800 mt-4">
              {selectedPlace.name}
            </h3>
            <p className="text-gray-600 mt-2">{selectedPlace.description}</p>
          </div>
        </div>
      )}
      <section className="min-h-screen bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Yo'nalishlar
          </h1>
          <div className="flex flex-wrap justify-between gap-6">
            {travelData.map((destination, index) => (
              <TravelCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
