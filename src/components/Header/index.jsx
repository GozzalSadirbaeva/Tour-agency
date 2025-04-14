'use client';

import { Select } from 'antd';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { memo, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lang = useLocale();

  const t = useTranslations();
  return (
    <header className="bg-white shadow-md">
      <div className="container px-4 md:px-8 flex justify-between items-center py-4">
        <Link
          href={`/${lang}`}
          className="text-yellow-500 text-2xl font-bold flex items-center gap-2"
        >
          <img
            src="/logo11.jpg"
            alt="Logo"
            className="w-[60px] h-[60px] rounded-full"
          />
          <p>{'belletto-tour'}</p>
        </Link>

        <div className="hidden md:flex gap-10 text-[#3d3990]">
          <Link href={`/${lang}`} className="nav-text">
            {t('Home')}
          </Link>
          <Link href={`/${lang}/destinations`} className="nav-text">
            {t('Destinations')}
          </Link>
          <Link href={`/${lang}/about`} className="nav-text">
            {t('About')}
          </Link>
          <Link href={`/${lang}/term`} className="nav-text">
            {t('Terms')}
          </Link>
          <Link href={`/${lang}/contact`} className="nav-text">
            {t('Contact')}
          </Link>
        </div>
        <Select
            style={{ width: 60 }}
            variant="filled"
            size="small"
            value={lang}
            onChange={(newLang) =>
              (window.location.href = `/${newLang}/${window.location.pathname.slice(
                3
              )}`)
            }
          >
            <Select.Option value="uz">UZ</Select.Option>
            <Select.Option value="en">EN</Select.Option>
            <Select.Option value="ru">RU</Select.Option>
          </Select>

        <div className="hidden md:flex  items-center gap-4">
          <Link href={`/${lang}/booking`}>
            <button className="bg-[#3d3990] text-white px-3 py-2 rounded-lg">
              {t('BookNow')}
            </button>
          </Link>
         
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
              href={`/${lang}`}
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              {t('Home')}
            </Link>
            <Link
              href={`/${lang}/destinations`}
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              {t('Destinations')}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              {t('About')}
            </Link>
            <Link
              href={`/${lang}/term`}
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              {t('Terms')}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="nav-text"
              onClick={() => setIsOpen(false)}
            >
              {t('Contact')}
            </Link>
            <Link href={`/${lang}/booking`}>
              <button
                className="bg-[#3d3990] text-white px-3 py-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {t('BookNow')}
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Header);
