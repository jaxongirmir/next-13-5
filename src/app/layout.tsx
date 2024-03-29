import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--var-mont' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Header />
        {children}
      </body>
    </html>
  )
}
