import Footer from '../components/Footer'
import '../styles/globals.css'
import localFont from 'next/font/local'

export const metadata = {
  title: 'Buying Bahia | Banderas Bay Real Estate',
  description: '',
}

const dmSans = localFont({src: '../fonts/DMSans.ttf', variable: '--font-dmsans'})
const raleway = localFont({src: '../fonts/Raleway.ttf', variable: '--font-raleway'})
const sacramento = localFont({src: '../fonts/Sacramento.ttf', variable: '--font-sacramento'})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${raleway.variable} ${sacramento.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
