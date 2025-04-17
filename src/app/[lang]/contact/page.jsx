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
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [formStatus, setFormStatus] = useState({ message: "", success: null });

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        setMarkerIcon(
          new L.Icon({
            iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
          })
        );
      });
    }
  }, []);

  // Function to open Google Maps
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${tashkentCenter[0]},${tashkentCenter[1]}`;
    window.open(googleMapsUrl, "_blank");
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: "", success: null });

    if (!formData.name || !formData.phone) {
      setFormStatus({ message: t("formValidationError"), success: false });
      return;
    }

    const payload = {
      chat_id: -1002512997357,
      name: formData.name,
      phone: formData.phone,
    };

    try {
      const response = await fetch("https://from-to.uz/api/telegram/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.status === 200) {
        setFormStatus({ message: t("formSuccessMessage"), success: true });
        setFormData({ name: "", phone: "" }); // Reset form
      } else {
        setFormStatus({ message: result.message || t("formErrorMessage"), success: false });
      }
    } catch (error) {
      setFormStatus({ message: t("formErrorMessage"), success: false });
    }
  };

  return (
    <div className="mt-20 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map and button */}
        <div className="relative h-[400px] sm:h-[600px] flex flex-col ">
          {markerIcon && (
            <MapContainer
              center={tashkentCenter}
              zoom={13}
              className="h-full w-full rounded-xl shadow-md z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={tashkentCenter} icon={markerIcon}>
                <Popup>{t("popupText")}</Popup>
              </Marker>
            </MapContainer>
          )}

          {/* Button inside map */}
          <button
            onClick={openGoogleMaps}
            className="absolute md:bottom-10 left-0 z-10 py-2 px-4 bg-[#DDAE57] text-white inter text-base sm:text-lg rounded-xl shadow-md hover:bg-[#c89b4c] transition"
          >
            {t("openInGoogleMapsButton")}
          </button>

          <h2 className="text-lg font-medium mt-4">{t("address")}</h2>
        </div>
        {/* Contact form */}
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
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t("namePlaceholder")}
                className="inter text-lg sm:text-xl leading-7 py-2 px-4 border border-gray-400 rounded-xl mb-4"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t("phonePlaceholder")}
                className="inter text-lg sm:text-xl leading-7 py-2 px-4 border border-gray-400 rounded-xl mb-4"
              />
              <button
                type="submit"
                className="py-3 bg-[#DDAE57] text-white inter text-lg sm:text-xl leading-7 rounded-xl hover:bg-[#c89b4c] transition"
              >
                {t("submitButton")}
              </button>
              {formStatus.message && (
                <p
                  className={`mt-4 text-center ${
                    formStatus.success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
