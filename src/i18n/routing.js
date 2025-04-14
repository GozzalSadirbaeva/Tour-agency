import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['uz', 'en', 'ru'],
  defaultLocale: 'uz',
  localeDetection: false // Avtomatik `locale` aniqlashni o‘chirish
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
