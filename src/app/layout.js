import { Inter } from 'next/font/google'
import NavBar from './components/NavBar/page'
import Footer from './components/Footer/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {children}
       <Footer/> 
        </body>
    </html>
  )
}
