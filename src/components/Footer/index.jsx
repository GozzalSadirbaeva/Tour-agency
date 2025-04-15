import Link from "next/link";
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare, FaFacebookSquare, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
   const lang = useLocale();
  const t = useTranslations();

  return (
    <div className="bg-[#3d3990] text-white py-10">
      <div className="container grid md:grid-cols-3 grid-cols-1 gap-8 px-4 md:px-8">
        {/* Company Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">{t("companyName")}</h2>
          <p className="mt-2 text-gray-300">{t("companySlogan")}</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <Link href={`/${lang}`} className="hover:text-gray-300">{t("home")}</Link>
          <Link href={`/${lang}/destinations`} className="hover:text-gray-300">{t("destinations")}</Link>
          <Link href={`/${lang}/about`} className="hover:text-gray-300">{t("about")}</Link>
          <Link  href={`/${lang}/term`} className="hover:text-gray-300">{t("terms")}</Link>
          <Link  href={`/${lang}/contact`} className="hover:text-gray-300">{t("contactus")}</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={20} />
            <span>+99895 040 74 47</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock size={20} />
            <span>{t("workingHours")}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsTelegram size={20} />
            <span>{t("telegram")}: <a href="https://t.me/belletto_tour" className="text-blue-300 hover:underline">@Belletto_tour</a></span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail size={20} />
            <span><a href="mailto:bellettotour@gmail.com" className="text-blue-300 hover:underline">bellettotour@gmail.com</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
