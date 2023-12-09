import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import './globals.css'

const arimo = Arimo({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Hoang Dung & Khanh Ngoc Wedding',
  description: 'Save our day at 16.12.2023, Hoang Dung & Khanh Ngoc Wedding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={arimo.className}>{children}</body>
    </html>
  )
}
