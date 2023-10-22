import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Footer'
import Header from './Header'
import 'bootstrap-icons/font/bootstrap-icons.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'wsp.bio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
