import type { AppProps } from 'next/app'
import '../styles/styles.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
      <div> 
      <Component {...pageProps} />
      </div>
      
    </>
  )
}
export default MyApp
