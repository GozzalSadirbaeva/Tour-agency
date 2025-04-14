import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import 'antd/dist/reset.css';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata = {
  title: 'Tour Agency',
  description: 'Tour agency'
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AntdRegistry>{children}</AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
