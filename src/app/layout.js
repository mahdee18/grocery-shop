import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Grocery Shop',
  description: 'Grocery Shop',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />
      
      </body>
    </html>
  )
}
export default RootLayout;
