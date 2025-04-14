'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight, FaMapMarkedAlt } from 'react-icons/fa';
import { GiAlarmClock } from 'react-icons/gi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const destinations = [
  { name: 'Bali, Indonesia', image: '/bali.jpg' },
  { name: 'Paris, France', image: '/paris.jpg' },
  { name: 'Tokyo, Japan', image: '/tokio.jpg' },
  { name: 'Pekin, China', image: '/jpg15.jpg' },
  { name: 'Bangkok, Thailand', image: '/jpg17.jpg' },
  { name: 'Rome, Italy', image: '/rome.jpg' },
  { name: 'Istanbul, Turkey', image: '/turkey.jpg' }
];

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sliderRef = useRef(null);
  const t = useTranslations();
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="bg-home relative h-screen flex items-center justify-center bg-cover bg-center text-black px-4">
        <div className="bg-white bg-opacity-50 p-6 md:p-10 rounded-lg text-center w-full max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#3d3990]">
            Belletto Tour bilan dunyo bo'ylab sayohat qiling
          </h1>
          <p className="text-base md:text-lg mb-6">
            Sizni ajoyib sarguzashtlar kutmoqda. Hozir bo'lmasa qachon?!
          </p>
          <a
            href="tel:+998950407447"
            className="bg-[#3d3990] text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-[#343082]"
          >
            {t('BookNow')}
          </a>
        </div>
      </section>
      <section className="container px-4 md:px-8 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {[
          { icon: <FaMapMarkedAlt size={40} />, text: 'Expert gid xizmati' },
          { icon: <BiHappyHeartEyes size={40} />, text: 'Mamnun mijozlar' },
          { icon: <GiAlarmClock size={40} />, text: 'Tezkor tasdiqlash' },
          {
            icon: <MdOutlineSupportAgent size={40} />,
            text: "24/7 Qo'llab-quvvatlash xizmati"
          }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="bg-[#3d3990] p-4 rounded-full text-white">
              {item.icon}
            </div>
            <p className="text-lg font-medium text-[#737372]">{item.text}</p>
          </div>
        ))}
      </section>
      <section className="container py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src="jpg20.jpg"
          alt="Biz haqimizda"
          className="rounded-xl w-full"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3d3990] text-center">
            Biz haqimizda
          </h2>
          <p className="text-2xl text-center pb-2">
            <b>BELLETTO TOUR </b>ga xush kelibsiz!
          </p>
          <p className="text-lg">
            Biz sizning ehtiyojlaringizga moslashtirilgan ajoyib sayohat
            tajribasini taqdim etishga bag'ishlangan yangi tashkil etilgan
            sayyohlik kompaniyasimiz. <br />
            <b>BELLETTO TOUR</b>-da biz har bir sayohat shunchaki sayohatdan
            ko'proq bo'lishi kerak, deb hisoblaymiz - bu kashfiyot, qulaylik va
            unutilmas xotiralar bilan to'ldirilgan sarguzasht bo'lishi kerak.
            Madaniy kashfiyotlar, dam olish sayohatlari yoki hayajonli
            sarguzashtlarni qidiryapsizmi, bizning jamoamiz buni amalga oshirish
            uchun shu yerda. <br />
            <b className="text-center">BELLETTO TOUR bilan sayohat qiling!</b>
          </p>
        </div>
      </section>
      <section className="pb-28 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3d3990]">
          Mashhur joylar
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#3d3990] text-white p-2 rounded-full z-10"
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
                    className="w-full h-60 object-cover"
                  />
                  <h3 className="text-lg md:text-xl font-semibold p-4">
                    {dest.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3d3990] text-white p-2 rounded-full z-10"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </section>
    </>
  );
}
