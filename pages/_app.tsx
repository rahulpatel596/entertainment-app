import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar  from '../components/navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-dark-navy h-screen'>
      <Navbar />
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
