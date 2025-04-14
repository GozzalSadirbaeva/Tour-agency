"use client";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const Contact = () => {
  const t = useTranslations(); 

  const tashkentCenter = [41.314702, 69.326102];
  const [markerIcon, setMarkerIcon] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        setMarkerIcon(
          new L.Icon({
            iconUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })
        );
      });
    }
  }, []);

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src="/jpg22.jpg" alt="" className="rounded-lg w-full object-cover" />
        </div>
        <div>
          <h2 className="font-bold text-3xl sm:text-4xl text-color-second text-center">
            {t("contactTitle")}
          </h2>
          <div className="pt-10 px-6 sm:px-10 pb-12 bg-white rounded-lg shadow-md">
            <h2 className="font-semibold text-2xl sm:text-3xl leading-8 pb-6">
              {t("formTitle")}
            </h2>
            <h3 className="inter text-lg sm:text-xl leading-7 pb-5">
              {t("formSubtitle")}
            </h3>
            <form action="" className="flex flex-col">
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                className="inter text-lg sm:text-xl leading-7 py-2 px-4 border border-gray-400 rounded-xl mb-4"
              />
              <input
                type="text"
                placeholder={t("phonePlaceholder")}
                className="inter text-lg sm:text-xl leading-7 py-2 px-4 border border-gray-400 rounded-xl mb-4"
              />
              <button className="py-3 bg-[#DDAE57] text-white inter text-lg sm:text-xl leading-7 rounded-xl">
                {t("submitButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-96 sm:h-[400px] mt-10 flex justify-center border-none">
        {markerIcon && (
          <MapContainer center={tashkentCenter} zoom={13} className="h-full w-full max-w-4xl">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={tashkentCenter} icon={markerIcon}>
              <Popup>{t("popupText")}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Contact;
