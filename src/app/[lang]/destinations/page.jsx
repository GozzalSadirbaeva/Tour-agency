"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import TravelCard from "@/components/TravelCard";
import { useTranslations } from "next-intl";





export default function Destinations() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const t = useTranslations();
  const places = [
    {
      name: t('nameFirst'),
      image: "/eiffel.png",
      description:
      t('descriptionFirst'),
    },
    {
      name: t('nameSecond'),
      image: "/greatwall.png",
      description:
      t('descriptionSecond'),
    },
    {
      name: t('nameThird'),
      image: "/tajmahal.png",
      description:
      t('descriptionThird'),
    },
  ];
  const travelData = [
    {
      city: t('Toshkentdan'),
      image: "/jpg14.jpg", 
      flights: [
        { destination: t('Moskva'), price: "3 125 670" },
        { destination: t("Istanbul"), price: "11 453 300" },
        { destination: t("Sankt-Peterburg"), price: "3 191 150" },
        { destination: t('Dubay'), price: "1 500" },
      ],
    },
    {
      city: t('Samarqanddan'),
      image: "/jpg6.jpg",
      flights: [
        { destination: t('Moskva'), price: "3 617 400" },
        { destination: t('Sankt-Peterburg'), price: "3 346 470" },
        { destination: t('Istanbul'), price: "3 322 990" },
        { destination: t('Sochi'), price: "4 229 740" },
      ],
    },
    {
      city: t('Fargonadan'),
      image: "/jpg2.jpg",
      flights: [
        { destination: t('Moskva'), price: "2 977 940" },
        { destination: t('Istanbul'), price: "3 563 010" },
        { destination: t('Novosibirsk'), price: "5 492 290" },
        { destination: t('Sankt-Peterburg'), price: "3 469 890" },
      ],
    },
    {
      city: t('Namangandan'),
      image: "/jpg19.jpg",
      flights: [
        { destination: t("Moskva"), price: "6 734 710" },
        { destination: t('Sankt-Peterburg'), price: "9 546 170" },
        { destination: t('Ekaterinburg'), price: "5 461 720" },
        { destination: t('Novosibirsk'), price: "9 463 460" },
      ],
    },
  ];
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-4xl font-bold text-[#3d3990] mb-6">
      {t('title_places')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div key={index} className="relative group cursor-pointer">
            <Image
              src={place.image}
              alt={place.name}
              effect="blur"
              width={341}
              height={511}
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <button
                onClick={() => setSelectedPlace(place)}
                className="bg-[#3d3990] text-white px-4 py-2 rounded-md"
              >
                {t('button_read_more')}
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
           {t('title_directions')}
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
