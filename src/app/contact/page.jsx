"use client"; 

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const Contact = () => {
  const tashkentCenter = [41.2995, 69.2401];

  const [markerIcon, setMarkerIcon] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        setMarkerIcon(
          new L.Icon({
            iconUrl:
              "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })
        );
      });
    }
  }, []);

  return (
    <div className="mt-10">
      <div className="container grid md:grid-cols-2 grid-cols-1">
        <div>
          <img src="/jpg22.jpg" alt="" className="rounded-lg" />
        </div>
        <div>
          <h2 className="font-bold text-[38px] leading-[30px] text-color-second text-center">
            Bog‘lanish
          </h2>
          <div className="pt-10 px-10 pb-12 bg-white">
            <h2 className="font-semibold text-[26px] leading-8 pb-6">
              Ma’lumot qoldiring
            </h2>
            <h3 className="inter text-[20px] leading-[34px] font-light pb-5">
              Ma’lumotlaringizni qoldiring va operatorimiz sizga darhol aloqaga
              chiqadi.
            </h3>
            <form action="" className="flex flex-col">
              <input
                type="text"
                placeholder="Ismingiz"
                className="inter text-xl leading-7 py-[10px] px-4 border-[1px] border-[#54576366] rounded-2xl mb-[20px]"
              />
              <input
                type="text"
                placeholder="+998 Telefon raqamingiz"
                className="inter text-xl leading-7 py-[10px] px-4 border-[1px] border-[#54576366] rounded-2xl mb-[20px]"
              />
              <button className="py-3 bg-[#DDAE57] text-white inter text-xl leading-7 rounded-2xl">
                Jo‘natish
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-[800px] h-[400px] mb-5 justify-self-center">
        {markerIcon && (
          <MapContainer center={tashkentCenter} zoom={13} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={tashkentCenter} icon={markerIcon}>
              <Popup>Toshkent markazi</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Contact;
