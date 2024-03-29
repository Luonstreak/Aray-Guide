import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gdpr from '../components/gdpr'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return <>
    <Gdpr />
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
