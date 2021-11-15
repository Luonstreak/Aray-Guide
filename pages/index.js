import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '../components/SearchInput' 
import ActivityCard from '../components/ActivityCard' 
import SchoolCard from '../components/SchoolCard' 
import CountryCard from '../components/CountryCard' 
import subsrcibete from '/public/images/subscribete.png'
import conoce from '/public/images/conoce.jpg'
import banner from '/public/images/banner.jpg'
import facebook from '/public/images/icons/facebook.svg';
import instagram from '/public/images/icons/instagram.svg';
import linkedin from '/public/images/icons/linkedin.svg';

export default function Inicio() {
  return (
    <div className="bg-gray-100">
      
      {/* META */}
      <Head>
        <title>Aray Guide</title>
        <meta name="description" content="Encuentra colegios atravez de España" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* JUMBO SEARCH */}
      <div className="w-screen h-2/3 lg:h-96 flex flex-col justify-center items-center bg-green-900">
        <div className="mx-auto w-10/12 md:w-full max-w-lg">
          <SearchInput large />
        </div>
        <h2 className="z-10 text-xl text-white md:text-3xl my-4 mx-8">Buscar un centro educativo en otro pais nunca ha sido tan facil</h2>
        {/* <div className="w-screen h-full">
          <Image src={banner} layout="responsive" width={1920} height={649} alt="hero image" />
        </div> */}
      </div>

      {/* ACTIVIDADES */}
      <div className="container mx-auto py-20 bg-yellow-300">
        <h2 className="ml-2 uppercase font-bold">Actividades destacadas</h2>
        <div className="flex overflow-x-scroll items-center">
          {[1,2,3,4,5,6].map(el => {
            return <ActivityCard key={el} el={el} />
          })}
        </div>
      </div>
      
      {/* SELECCION */}
      <div className="container mx-auto py-20 bg-yellow-300">
        <h2 className="ml-2 uppercase font-bold">seleccion</h2>
        <p className="ml-2 uppercase">de la guia aray</p>
        <div className="flex overflow-x-scroll items-center">
          {[1,2,3,4,5,6].map(el => {
            return <SchoolCard key={el} el={el} />
          })}
        </div>
      </div>

      {/* SUBSCRIBETE */}
      <div className="w-screen bg-yellow-500">
        <div className="container mx-auto py-10 md:rounded bg-white p-4 flex flex-col md:flex-row content-center">
          <div>
            <h1 className="text-3xl text-gray-700 mb-2 md:mb-4">Subscribete a nuestro newsletter</h1>
            <p>Y mantente al tanto de todo lo que occure en nuestra guia</p>
            <hr className="border-yellow-500 border-1 md:border-2 w-full my-8 md:mb-0 md:w-16 my-2" />
          </div>
          <Link href="/subscribete"><a className="text-center md:text-left md:ml-10"><Image src={subsrcibete} width={50} height={50} alt="flecha derecha" /></a></Link>
        </div>
      </div>

      {/* PAISES */}
      <div className="container mx-auto py-20 bg-yellow-300">
        <h2 className="ml-2 uppercase font-bold">Los Paises</h2>
        <p className="ml-2 uppercase">de la guia aray</p>
        <div className="flex overflow-x-scroll overflow- items-center">
          {[1,2,3,4,5,6].map(el => {
            return <CountryCard key={el} el={el} />
          })}
        </div>
      </div>

      {/* CONOCE TODO SOBRE LA GUIA */}
      <div className="w-screen bg-green-500 h-screen md:h-96">
        <div className="w-screen bg-yellow-500 relative">
          <div className="w-10/12 md:w-80 mx-auto h-auto absolute inset-x-0 md:-left-10">
            <Image layout="responsive" className="rounded-lg" src={conoce} width={150} height={175}  alt="preview de actividad"/>
          </div>
          <div className="absolute top-64 md:top-20 inset-x-2 md:left-40 md:right-10 bg-white rounded-lg p-4 p-4 flex flex-col md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl text-gray-700">Conoce todo</h1>
              <p>Sobre la guia</p>
              <hr className="border-yellow-500 border-1 md:border-2 w-full my-8 md:w-16 my-2" />
              <p>Descubre todo sobre la guia bla bla bla</p>
            </div>
            <Link href="/subscribete"><a className="text-center md:text-left md:ml-10"><Image src={subsrcibete} width={50} height={50} alt="flecha derecha" /></a></Link>
          </div>
        </div>
      </div>

      {/* REDES SOCIALES */}
      <div className="w-screen bg-red-500 py-10 text-center">
          <h2 className="text-xl uppercase font-bold">siguenos en nuestras redes sociales</h2>
          {/* <hr clasName="w-40 border-yellow-700 border-1" /> */}
          <hr className="border-yellow-500 border-1 md:border-2 w-20 my-8 md:w-16 my-2 mx-auto mb-8" />
          <div className="flex mx-4 justify-center">
            {/* facebook */}
            <Link href="https:/facebook.com/arayasociados/" target="_blank">
              <div className="flex flex-col items-center mr-4">
                <svg x="0px" y="0px" viewBox="0 0 100 100" className="fill-current text-primary w-8 h-8 mb-2">
                  <path d="M100,50.3c0-27.6-22.4-50-50-50S0,22.7,0,50.3c0,25,18.3,45.6,42.2,49.4V64.8H29.5V50.3h12.7v-11c0-12.5,7.5-19.5,18.9-19.5 c5.5,0,11.2,1,11.2,1v12.3H66c-6.2,0-8.2,3.9-8.2,7.8v9.4h13.9l-2.2,14.5H57.8v34.9C81.7,95.9,100,75.3,100,50.3z"/>
                </svg>
                <p className="text-xs font-bold text-gray-500">Facebook</p>
              </div>
            </Link>
            {/* instagram */}
            <div className="flex flex-col items-center mr-4">
              <Link href="https:/instagram.com/arayasociados/" target="_blank">
              <svg x="0px" y="0px" viewBox="0 0 100 100" className="w-8 h-8 mb-2">
                <circle className="fill-current text-primary" id="XMLID_115_" cx="50" cy="50" r="50"/>
                <path className="stroke-current text-white" d="M70.5,20.1h-41c-5.2,0-9.4,4.2-9.4,9.4v41c0,5.2,4.2,9.4,9.4,9.4h41c5.2,0,9.4-4.2,9.4-9.4v-41
                  C79.9,24.3,75.7,20.1,70.5,20.1z M64.2,27l7.5,0h0c0.7,0,1.3,0.6,1.3,1.3v7.5c0,0.7-0.6,1.3-1.3,1.3l-7.5,0c-0.7,0-1.3-0.6-1.3-1.3
                  l0-7.5C62.9,27.6,63.4,27,64.2,27z M40.8,44.9c0.2-0.3,0.4-0.7,0.6-1c1.9-2.7,5-4.4,8.5-4.4c3.5,0,6.6,1.7,8.5,4.4
                  c0.2,0.3,0.4,0.7,0.6,1c0.9,1.5,1.4,3.3,1.4,5.1c0,5.8-4.7,10.5-10.5,10.5S39.5,55.8,39.5,50C39.5,48.1,40,46.4,40.8,44.9z
                  M74.1,68.4c0,3.2-2.6,5.7-5.7,5.7H31.6c-3.2,0-5.7-2.6-5.7-5.7V43.9h8.9c-0.2,0.5-0.4,1.1-0.6,1.7c-0.4,1.4-0.6,2.9-0.6,4.5
                  c0,9,7.3,16.4,16.4,16.4c9,0,16.4-7.3,16.4-16.4c0-1.5-0.2-3-0.6-4.5c-0.2-0.6-0.4-1.1-0.6-1.7h8.9V68.4z"/>
                </svg>
              </Link>
              <p className="text-xs font-bold text-gray-500">Instagram</p>
            </div>
          </div>
      </div>

    </div>
  )
}
