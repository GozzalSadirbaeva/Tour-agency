"use client";
import { useEffect, useRef } from "react";
import { BiHappyHeartEyes } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight, FaMapMarkedAlt } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const destinations = [
  {
    name: "Bali, Indonesia",
    image: "/bali.jpg",
  },
  {
    name: "Paris, France",
    image: "/paris.jpg",
  },
  {
    name: "Tokyo, Japan",
    image: "tokio.jpg",
  },
  {
    name: "Pekin, China",
    image: "/jpg15.jpg",
  },
  {
    name: "Bangkok, Thailand",
    image: "/jpg17.jpg",
  },
  {
    name: "Rome, Italy",
    image: "/rome.jpg",
  },
  {
    name: "Istanbul, Turkey",
    image: "/turkey.jpg",
  },
];

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className=" bg-home relative h-screen flex items-center justify-center bg-cover bg-center text-black">
        <div className="bg-white bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#3d3990]">
          Belletto Tour bilan dunyo bo'ylab sayohat qiling
          </h1>
          <p className="text-lg mb-6">
          Sizni ajoyib sarguzashtlar kutmoqda. Hozir bo'lmasa qachon?!
          </p>
          <button className="bg-[#3d3990] text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-[#343082]">
            Bron qilish
          </button>
        </div>
      </section>
      <section className="container md:px-8 px-4 pt-10 flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-[#3d3990] p-4 rounded-full">
            <FaMapMarkedAlt size={"40px"} color="white" />
          </div>
          <p className="text-xl font-medium text-[#737372]">
            Expert gid xizmati
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#3d3990] p-4 rounded-full">
            <BiHappyHeartEyes size={"40px"} color="white" />
          </div>
          <p className="text-xl font-medium text-[#737372]">Mamnun mijozlar</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#3d3990] p-4 rounded-full">
            <GiAlarmClock size={"40px"} color="white" />
          </div>
          <p className="text-xl font-medium text-[#737372]">
          Tezkor tasdiqlash
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#3d3990] p-4 rounded-full">
            <MdOutlineSupportAgent size={"40px"} color="white" />
          </div>
          <p className="text-xl font-medium text-[#737372]">24/7 Qo'llab-quvvatlash xizmati</p>
        </div>
      </section>
      <section className="container py-28 px-6  grid md:grid-cols-2 grid-cols-1 md:gap-10">
        <div>
          <img src="jpg20.jpg" alt="" className="rounded-xl" />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6  text-[#3d3990] text-center">
            Biz haqimizda
          </h2>
          <p className=" pb-5 text-lg">
          Bizning sayyohlik agentligimiz noyob va qiziqarli sayohat tajribalarini taklif etadi
            shaxslar va guruhlar. Sarguzashtlarga, madaniyatga va
            barqaror turizm uchun unutilmas xotiralar yaratishga intilamiz
            bizning mijozlarimiz.
          </p>
          <p className="text-lg">
          Bizning bilimli gidlar va samimiy xodimlar jamoasi
            mukammal xizmat ko'rsatish va xavfsiz va qiziqarli sayohatni ta'minlash
            hamma uchun. Ekzotik joylarni o'rganishdan tortib, yangi faoliyatni sinab ko'rishgacha
            va oshxonalar, biz moslashtirilgan marshrutlarga ixtisoslashganmiz
            turli manfaatlar va byudjetlar. Unutilmas sayohat uchun bizga qo'shiling
            ufqlaringizni kengaytiradi va sizni ilhomlantiradi.
          </p>
        </div>
      </section>
      <section className="pb-28 text-center ">
        <h2 className="text-4xl font-bold mb-6 text-[#3d3990]">
        Mashhur joylar
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#3d3990] text-white p-2 rounded-full z-10"
          >
            <FaChevronLeft size={24} />
          </button>
          <Slider ref={sliderRef} {...settings}>
            {destinations.map((dest, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-72 object-cover"
                  />
                  <h3 className="text-xl font-semibold p-4">{dest.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#3d3990] text-white p-2 rounded-full z-10"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </section>
    </>
  );
}
