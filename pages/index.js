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
import tiktok from '/public/images/icons/tiktok.svg';
import weibo from '/public/images/icons/weibo.svg';
import xiaohongshu from '/public/images/icons/xiaohongshu.svg';
import wechat from '/public/images/icons/wechat.svg';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Inicio() {

  const [schools, setSchools] = useState(null)
  const [actividades, setActividades] = useState(null)
  const [paises, setPaises] = useState([
    { name: 'españa', id: '15' },
    { name: 'francia', id: '' },
    { name: 'italia', id: '' },
    { name: 'alemania', id: '' },
    { name: 'inglaterra', id: '' },
    { name: 'portugal', id: '' },
  ])

  const router = useRouter();

  useEffect(() => {
    if(!schools){
      axios.get('https://ouro.com/wp-json/wp/v2/colegios?_embed').then(res => {
        if (res.data) {
          setSchools(res.data);
        }
      }).catch(err => console.log(err, 'There was an error fetching "Colegios"'));
    }
    if(!actividades){
      axios.get('https://ouro.com/wp-json/wp/v2/actividades?_embed').then(res => {
        if (res.data) {
          setActividades(res.data);
        }
      }).catch(err => console.log(err, 'There was an error fetching "Actviades"'));
    }
    if(!paises){
      let paisesWithData = []
      paises.map(({ name }) => {
        paisesWithData.push({ name, numeroDeColegios: 0 });
        // axios.get(`https://localhost/colegios?pais=${paisId}`).then(res => {
        //   if (res.data) {
        //     paisesWithData.push({})
        //   }
        // }).catch(err => console.log(err, 'There was an error fetching "Paises"'));
        setPaises(paisesWithData);
      });
    }
  })

  const submitSearch = term => {
    router.push(`/buscar?q=${term}`)
  }

  return (
    <div className="bg-gray-50">
      
      {/* META */}
      <Head>
        <title>Aray Guide</title>
        <meta name="description" content="Encuentra colegios atravez de España" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* HERO SEARCH */}
      <div className="w-screen h-80 lg:h-96 flex flex-col justify-center content-center bg-primary relative">
        <div className="z-10 mx-auto w-10/12 md:w-full max-w-xl">
          <SearchInput onChange={submitSearch} />
        </div>
        <h2 className="z-10 te2xt-xl text-white md:text-3xl my-4 mx-8 lg:mx-auto display">Buscar un centro educativo en otro pais nunca ha sido tan facil</h2>
        <div className="z-0 absolute inset-0">
          <Image priority src={banner} layout="fill" className="object-cover brightness-90" alt="hero image" />
        </div>
      </div>
      
      {/* ACTIVIDADES */}
      <div className="container mx-auto max-w-screen-lg px-2">
        <hr className="container-separator" />
        <h1 className="uppercase font-bold mb-8 text-2xl md:text-3xl lg:text-4xl">actividades destacadas</h1>
        <div className="flex overflow-x-scroll items-center">
          {actividades 
            ? actividades.length > 0
              ? actividades.map(el => <ActivityCard key={el.guid.rendered} el={el} />) 
              : <p className="text-lg text-gray-500 text-center w-full">No hay actividades en este momento</p>
            : <p>loading...</p>
          }
        </div>
      </div>
      
      {/* SELECCION */}
      <div className="container mx-auto max-w-screen-lg px-2">
        <hr className="container-separator" />
        <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl">seleccion</h1>
        <p className="mb-8 uppercase text-gray-400">de la guia aray</p>
        <div className="flex overflow-x-scroll items-center gap-x-2 md:gap-x-6">
          {schools 
            ? schools.map(el => <SchoolCard key={el.guid.rendered} el={el} />) 
            : <p>loading...</p>
          }
        </div>
        <hr className="container-separator" />
      </div>

      {/* SUBSCRIBETE */}
      <div className="w-screen bg-primary mb-32">
        <Link href="/subscribete" passHref>
          <div className="cursor-pointer w-full lg:w-8/12 xl:w-5/12 shadow-lg rounded bg-white p-4 md:p-6 relative md:inset-x-auto -bottom-16 flex flex-col md:flex-row justify-center md:items-center mx-auto">
            <div>
              <h1 className="text-4xl font-bold">Subscribete a nuestro newsletter</h1>
              <p className="mb-4">Y mantente al tanto de todo lo que occure en nuestra guia</p>
              <hr className="title-separator" />
            </div>
            <a className="text-center md:text-left md:ml-10"><Image src={subsrcibete} width={50} height={50} alt="flecha derecha" /></a>
          </div>
        </Link>
      </div>

      {/* PAISES */}
      <div className="container mx-auto max-w-screen-lg px-2">
        <hr className="container-separator" />
        <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl">los paises</h1>
        <p className="mb-8 uppercase text-gray-400">de la guia aray</p>
        <div className="flex overflow-x-scroll items-center gap-x-4 md:gap-x-6">
          {paises.map(pais => {
            return <CountryCard key={pais.name} pais={pais} />
          })}
        </div>
        <hr className="container-separator" />
      </div>

      {/* CONOCE TODO SOBRE LA GUIA */}
      <div className="w-screen py-20 mt-32 mb-80 bg-primary relative">
          <div className="absolute -top-12 sm:left-20 lg:left-1/4 shadow-md w-80 flex-shrink-0" >
            <Image layout="responsive" className="rounded-lg" src={conoce}  alt="preview de actividad"/>
          </div>
          <Link href="/subscribete" passHref>
            <div className="absolute inset-x-0 md:left-10 md:right-10 lg:left-1/3 lg:right-1/3 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col md:flex-row md:items-center ">
              <div>
                <h1 className="text-4xl font-bold capitalize mb-2">conoce todo</h1>
                <p className="text-gray-500 mb-4">sobre la guia aray</p>
                <hr className="title-separator" />
                <p className="mb-2">Descubre todo lo que necesitas saber sobre la guia de colegios mas completa que Aray ha desarollado para que todo sea mas comodo y sensillo para ti</p>
              </div>
              <div className="mx-auto md:w-40 mt-4 md:mt-0">
                <Image src={subsrcibete} width={50} height={50} alt="flecha derecha" />
              </div>
            </div>
          </Link>
      </div>

      {/* REDES SOCIALES */}
      <div className="container mx-auto max-w-screen-lg md:text-center px-2">
        <hr className="container-separator" />
        <h1 className="text-4xl font-bold capitalize mb-2">siguenos en nuestras redes sociales</h1>
          <hr className="title-separator mx-auto h-1" />
          <div className="flex flex-wrap justify-center gap-x-4 pt-4 pb-32">

            {/* facebook */}
            <a href="https:/facebook.com/arayasociados/" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={facebook} w={25} h={25} alt="facebook logo" />
                <p className="text-xs">Facebook</p>
              </div>
            </a>

            {/* instagram */}
            <a href="https://www.instagram.com/arayasociados" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={instagram} w={25} h={25} alt="instagram logo" />
                <p className="text-xs">Instagram</p>
              </div>
            </a>
            
            {/* linkedin */}
            <a href="https://www.linkedin.com/company/ara%26asociados/" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={linkedin} w={25} h={25} alt="linkedin logo" />
                <p className="text-xs">Linked In</p>
              </div>
            </a>
            
            {/* tiktok */}
            <a href="https:/tiktok.com/arayasociados/" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={tiktok} w={25} h={25} alt="tiktok logo" />
                <p className="text-xs">TikTok</p>
              </div>
            </a>

            {/* wechat */}
            {/* <Link href="https:/wechat.com/arayasociados/" target="_blank" rel="noreferrer" passHref>
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={wechat} w={25} h={25} alt="wechat logo" />
                <p className="text-xs">WeChat</p>
              </div>
            </Link> */}

            {/* weibo */}
            {/* <Link href="https:/weibo.com/arayasociados/" target="_blank" rel="noreferrer" passHref>
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={weibo} w={25} h={25} alt="weibo logo" />
                <p className="text-xs">Weibo</p>
              </div>
            </Link> */}

            {/* dou yin */}
            {/* <Link href="https:/douyin.com/arayasociados/" target="_blank" rel="noreferrer" passHref>
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={tiktok} w={25} h={25} alt="tiktok logo" />
                <p className="text-xs">Dou Yin</p>
              </div>
            </Link> */}

            {/* xiao hong shu */}
            {/* <Link href="https:/xiaohongshu.com/arayasociados/" target="_blank" rel="noreferrer" passHref>
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={xiaohongshu} w={25} h={25} alt="xiaohongshu logo" />
                <p className="text-xs">Xiao Hong Shu</p>
              </div>
            </Link> */}



          </div>

      </div>

    </div>
  )
}
