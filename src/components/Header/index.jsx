"use client";
import Link from "next/link";
import { memo, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="container px-4 md:px-8 flex justify-between items-center py-4">
        <a className=" text-[#3d3990] text-2xl font-bold"><img src="/logo.png" alt="" className="w-[200px] h-[60px]" /></a>

        <div className="flex items-center gap-10 ">
          <div className="hidden md:flex gap-10 text-[#3d3990]">
            <Link href={"/"} className="nav-text">Bosh sahifa</Link>
            <Link href={"/destinations"} className="nav-text">
              Sayohatlar            
            </Link>
            <Link href={"/about"} className="nav-text">
              Biz haqimizda            
            </Link>
            <Link href={"/term"} className="nav-text">
            Foydalanish shartlari          
            </Link>
            <Link href={"/contact"} className="nav-text">Bog'lanish</Link>
          </div>
        </div>

        <div>
          <button className="bg-[#3d3990] text-white px-3 py-2 rounded-lg">
            Bron qilish
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
