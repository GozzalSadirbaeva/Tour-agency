import Link from "next/link";
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare, FaFacebookSquare, FaPhoneAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#3d3990] text-white py-10">
      <div className="container grid md:grid-cols-3 grid-cols-1 gap-8 px-4 md:px-8">
        {/* Company Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">BELLETTO-TOUR</h2>
          <p className="mt-2 text-gray-300">Siz bilan birga eng yaxshi sayohatlar!</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <Link href="/" className="hover:text-gray-300">Bosh sahifa</Link>
          <Link href="/destinations" className="hover:text-gray-300">Sayohatlar</Link>
          <Link href="/about" className="hover:text-gray-300">Biz haqimizda</Link>
          <Link href="/term" className="hover:text-gray-300">Foydalanish shartlari</Link>
          <Link href="/contact" className="hover:text-gray-300">Bog'lanish</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={20} />
            <span>+998 95 040-74-47</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock size={20} />
            <span>Ish vaqti: 9:00-18:00 (Dushanba - Seshanba)</span>
          </div>
          <div className="flex items-center gap-2">
            <BsTelegram size={20} />
            <span>24 soat online aloqa: <a href="https://t.me/belletto_tour" className="text-blue-300 hover:underline">@Belletto_uz</a></span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;
