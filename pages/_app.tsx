import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-white text-black'>
    <Component {...pageProps} />
  </div>
}
