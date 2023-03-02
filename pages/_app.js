import { Bai_Jamjuree } from '@next/font/google'
import { useRouter } from 'next/router'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const bai = Bai_Jamjuree({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: 'normal',
  display: 'swap',
  variable: '--font-bai',
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const active = router.pathname.split('/')[1]
  return (
    <div
      className={bai.className}
      style={{
        color: 'white',
      }}
    >
      <Navbar active={active} />
      <Component {...pageProps} />
      <ToastContainer />

      <Footer />
    </div>
  )
}
