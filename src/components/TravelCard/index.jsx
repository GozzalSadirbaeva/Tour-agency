import Image from "next/image";

const TravelCard = ({ city, image, flights }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row w-full md:w-[48%] lg:w-[48%]">
      {/* Image Section */}
      <div className="relative w-full h-40 md:w-1/2 md:h-auto">
        <Image src={image} alt={city} layout="fill" objectFit="cover" />
      </div>

      {/* Text Content */}
      <div className="p-5 flex-1">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">{city}</h2>
        <ul className="space-y-2 text-gray-700">
          {flights.map((flight, index) => (
            <li key={index} className="flex justify-between">
              <span>{flight.destination}</span>
              <span className="font-medium">{flight.price} UZS</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TravelCard;