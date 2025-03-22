import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inspirigence Advisors | Financial Services',
  description: 'Inspirigence Advisors | We Provide Top Tier Financial Services To Corporates & Corporate Entities To Help Them Achieve Their Financial Objectives.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
