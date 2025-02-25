import Link from "next/link";
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {

  return (
    <div className="bg-[#3d3990]">
      <div className="container grid md:grid-cols-3 grid-cols-1  py-10 md:px-8 px-4 items-center place-items-center">
        <div>
          <a className=" text-white text-2xl font-bold">BELLETTO-TRAVEL</a>
        </div>
        <div className="flex flex-col gap-3">
          <Link href={"/"} className="footer-text">
            Bosh sahifa
          </Link>
          <Link href={"/destinations"} className="footer-text">
            Sayohatlar
          </Link>
          <Link href={"/about"} className="footer-text">
            Biz haqimizda
          </Link>
          <Link href={"/term"} className="footer-text">
            Foydalanish shartlari          
            </Link>
          <Link href={"/contact"} className="footer-text">
            Bog'lanish
          </Link>
        </div>
        <div className="flex gap-4">
          <a href=""><BsTelegram color="white" size={"30px"}/></a>
          <a href=""><FaInstagramSquare color="white" size={"30px"}/></a>
          <a href=""><FaFacebookSquare color="white" size={"30px"}/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
