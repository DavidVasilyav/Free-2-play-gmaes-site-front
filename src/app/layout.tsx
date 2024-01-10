import {Providers} from 'redux/provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Archivo_Narrow } from 'next/font/google'
import Footer from '../../components/layout/footer/footer'
import Navbar from '../../components/layout/navbar/navbar'
import {Box} from '@mui/material'
const inter = Inter({ subsets: ['latin'] })
const archivo = Archivo_Narrow({ subsets: ['latin']})
export const metadata: Metadata = {
  title: 'Free to play games for PC',
  description: 'This site show you all the free to paly games that available for pc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={archivo.className}>
        <Providers>
        <Navbar />
        {children}
        <Footer />
        </Providers>
        </main>
        </body>
    </html>
  )
}
