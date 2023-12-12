import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Hoang Dung & Khanh Ngoc Wedding',
  description: 'Save our day at 16.12.2023, Hoang Dung & Khanh Ngoc Wedding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <SpeedInsights />
      <Theme>
        <body>
          {children}
          <Analytics />
        </body>
      </Theme>
    </html>
  );
}
