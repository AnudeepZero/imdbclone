import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './Provider'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'NextJs 13 App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={inter.className}>
        {/* we do not embedded ThemeProvider from next themes in layout or any components it 
      will cause to client side rendering so used provider created by our selfs */}
        <Provider>
          {/* Header component */}
          <Header />

          {/* Navbar */}
          <NavBar />
          {/* body */}
          {children}
        </Provider>

      </body>
    </html>
  )
}
