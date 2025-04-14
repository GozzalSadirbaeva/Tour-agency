'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-[#3d3990] text-center mb-6">2025-yilda eng mashhur sayyohlik agentliklaridan biri</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/jpg1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-[#3d3990]">1000+</h3>
            <p className="text-gray-600">Sayyohlar biz bilan allaqachon dunyoni tanib olishgan</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#3d3990]">1</h3>
            <p className="text-gray-600">Dunyo bo'ylab sayohatlar o'tkazishda yillik tajriba</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#3d3990]">99%</h3>
            <p className="text-gray-600">Sayyohlar agentligimizga ajoyib baho berdi</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#3d3990]">15+</h3>
            <p className="text-gray-600">ekskursiyalar olib boriladigan tillar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
