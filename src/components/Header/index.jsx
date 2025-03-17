"use client";
import Link from "next/link";
import { memo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container px-4 md:px-8 flex justify-between items-center py-4">
        <Link href="/" className="text-yellow-500 text-2xl font-bold flex items-center gap-2">
          <img src="/logo11.jpg" alt="Logo" className="w-[60px] h-[60px] rounded-full" />
          <p>Belletto-Tour</p>

        </Link>

        <div className="hidden md:flex gap-10 text-[#3d3990]">
          <Link href="/" className="nav-text">
            Bosh sahifa
          </Link>
          <Link href="/destinations" className="nav-text">
            Sayohatlar
          </Link>
          <Link href="/about" className="nav-text">
            Biz haqimizda
          </Link>
          <Link href="/term" className="nav-text">
            Foydalanish shartlari
          </Link>
          <Link href="/contact" className="nav-text">
            Bog'lanish
          </Link>
        </div>

        <div className="hidden md:block">
          <button className="bg-[#3d3990] text-white px-3 py-2 rounded-lg">
            Bron qilish
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#3d3990] text-3xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-10">
          <nav className="flex flex-col items-center py-4 gap-4 text-[#3d3990]">
            <Link
              href="/"
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/destinations"
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              Sayohatlar
            </Link>
            <Link
              href="/about"
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              Biz haqimizda
            </Link>
            <Link
              href="/term"
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              Foydalanish shartlari
            </Link>
            <Link
              href="/contact"
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              Bog'lanish
            </Link>
            <a href="tel:+998950407447"
              className="bg-[#3d3990] text-white px-3 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Bron qilish
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Header);
