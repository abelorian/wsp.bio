import { Inter } from 'next/font/google'
import 'styles/globals.css'
import Footer from './Footer'
import Header from './Header'
import 'bootstrap-icons/font/bootstrap-icons.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Generador de links y código QR de Whatsapp gratuito | wsp.bio',
  description: "Crea gratis tus propios códigos QRs. Elige colores y las formas que quieras",
  openGraph: {
    title: 'Generador de links y código QR de Whatsapp gratuito | wsp.bio',
    description: "Crea gratis tus propios códigos QRs. Elige colores y las formas que quieras"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
