import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gdpr from '../components/gdpr'
function MyApp({ Component, pageProps }) {
  return <>
    {/* <Gdpr /> */}
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
