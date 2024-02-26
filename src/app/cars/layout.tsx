import Header from '@/components/header/Header'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--var-mont' })
export const metadata: Metadata = {
  title: 'Cars catalog | next vs react',
  description: 'hello my name is Jaxongir',
}
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
