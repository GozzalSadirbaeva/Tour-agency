'use client';

import Faq from '@/components/Faq';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
    const t = useTranslations();
  
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-[#3d3990] text-center mb-6">{t('title')}</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center pb-10">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/jpg1.jpg"
            alt=""
            layout="fill"
             effect="blur"
            objectFit="cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-[#3d3990]">1000+</h3>
            <p className="text-gray-600">{t('tourists')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#3d3990]">1</h3>
            <p className="text-gray-600">{t('experience')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#3d3990]">99%</h3>
            <p className="text-gray-600">{t('rating')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#3d3990]">15+</h3>
            <p className="text-gray-600">{t('languages')}</p>
          </div>
        </div>
      </div>
      <Faq/>
    </section>
  );
}
