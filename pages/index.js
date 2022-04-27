import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '../components/SearchInput' 
import subsrcibete from '/public/images/subscribete.png'
import conoce from '/public/images/conoce.jpg'
import banner from '/public/images/banner.jpg'
import facebook from '/public/images/icons/facebook.svg'
import instagram from '/public/images/icons/instagram.svg'
import linkedin from '/public/images/icons/linkedin.svg'
import tiktok from '/public/images/icons/tiktok.svg'
import weibo from '/public/images/icons/weibo.svg'
import xiaohongshu from '/public/images/icons/xiaohongshu.svg'
import wechat from '/public/images/icons/wechat.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import i18n from '../util/i18n.json'
import Carousel from '../components/Carousel'

function Inicio() {

  const [schools, setSchools] = useState(null)
  const [actividades, setActividades] = useState(null)
  const [paises, setPaises] = useState([
    { name: 'españa', id: '15' },
    { name: 'francia', id: '' },
    { name: 'italia', id: '' },
    { name: 'alemania', id: '' },
    { name: 'inglaterra', id: '' },
    { name: 'portugal', id: '' },
  ]);

  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if(!schools){
      axios.get('https://ouroinc.com/wp-json/wp/v2/colegios?_embed&per_page=12').then(res => {
        if (res.data) {
          setSchools(res.data);
        }
      }).catch(err => console.log(err, 'There was an error fetching "Colegios"'));
    }
    if(!actividades){
      axios.get('https://ouroinc.com/wp-json/wp/v2/actividades?_embed').then(res => {
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

  return (
    <div className="bg-gray-50">
      
      {/* META */}
      <Head>
        <title>{i18n[locale].metaTtl}</title>
        <meta name="description" content="Encuentra colegios atravez de España" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* HERO SEARCH */}
      <div className="w-screen h-80 lg:h-96 flex flex-col justify-center content-center bg-primary relative">
        <div className="z-20 mx-auto w-10/12 md:w-full max-w-xl">
          <SearchInput />
        </div>
        <h2 className="z-10 te2xt-xl text-white md:text-3xl my-4 mx-8 lg:mx-auto display">{i18n[locale].indHeroText}</h2>
        <div className="z-0 absolute inset-0">
          <Image priority src={banner} layout="fill" className="object-cover brightness-90" alt="hero image" />
        </div>
      </div>
      
      {/* ACTIVIDADES */}
      <div className="container mx-auto max-w-screen-lg px-2">
        <hr className="container-separator" />
        <h1 className="uppercase font-bold mb-8 text-2xl md:text-3xl lg:text-4xl">{i18n[locale].globActDes}</h1>
        <Carousel data={actividades} type="activity" />
        <hr className="container-separator" />
      </div>
      
      {/* SELECCION */}
      <div className="container mx-auto max-w-screen-lg px-2">
        <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl">{i18n[locale].indSelec}</h1>
        <p className="mb-8 uppercase text-gray-400">{i18n[locale].indSelecSub}</p>
        <Carousel data={schools} type="school" />
        <hr className="container-separator" />
      </div>

      {/* SUBSCRIBETE */}
      <div className="w-screen bg-primary mb-32">
        <Link href="/subscribete" passHref>
          <div className="cursor-pointer w-full lg:w-8/12 xl:w-5/12 shadow-lg rounded bg-white p-4 md:p-6 relative md:inset-x-auto -bottom-16 flex flex-col md:flex-row justify-center md:items-center mx-auto">
            <div>
              <h1 className="text-4xl font-bold">{i18n[locale].indSubTtl}</h1>
              <p className="mb-4">{i18n[locale].indSubSubttl}</p>
              <hr className="title-separator" />
            </div>
            <a className="text-center md:text-left md:ml-10"><Image src={subsrcibete} width={50} height={50} alt="flecha derecha" /></a>
          </div>
        </Link>
      </div>

      {/* PAISES */}
      <div className="container mx-auto max-w-screen-lg px-2">
        <hr className="container-separator" />
        <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl">{i18n[locale].indPais}</h1>
        <p className="mb-8 uppercase text-gray-400">{i18n[locale].indPaisSub}</p>
        <Carousel data={paises} type="country" />
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
                <h1 className="text-4xl font-bold capitalize mb-2">{i18n[locale].indCono}</h1>
                <p className="text-gray-500 mb-4">{i18n[locale].indConoSub}</p>
                <hr className="title-separator" />
                <p className="mb-2">{i18n[locale].indConoDesc}</p>
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
        <h1 className="text-4xl font-bold capitalize mb-2">{i18n[locale].indSigueTtl}</h1>
          <hr className="title-separator mx-auto h-1" />
          <div className="flex flex-wrap justify-center gap-x-4 pt-4 pb-32">

            {/* facebook */}
            {locale !== 'zh-CN' && <a href="https:/facebook.com/arayasociados/" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={facebook} w={25} h={25} alt="facebook logo" />
                <p className="text-xs">Facebook</p>
              </div>
            </a>}

            {/* instagram */}
            {locale !== 'zh-CN' && <a href="https://www.instagram.com/arayasociados" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={instagram} w={25} h={25} alt="instagram logo" />
                <p className="text-xs">Instagram</p>
              </div>
            </a>}
            
            {/* linkedin */}
            {locale !== 'zh-CN' && <a href="https://www.linkedin.com/company/ara%26asociados/" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={linkedin} w={25} h={25} alt="linkedin logo" />
                <p className="text-xs">Linked In</p>
              </div>
            </a>}
            
            {/* tiktok */}
            {locale !== 'zh-CN' && <a href="https:/tiktok.com/arayasociados/" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={tiktok} w={25} h={25} alt="tiktok logo" />
                <p className="text-xs">TikTok</p>
              </div>
            </a>}

            {/* wechat */}
            {locale === 'zh-CN' && <a href="https:/wechat.com/arayasociados/" target="_blank" rel="noreferrer" passHref>
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={wechat} w={25} h={25} alt="wechat logo" />
                <p className="text-xs">WeChat</p>
              </div>
            </a>}

            {/* weibo */}
            {locale === 'zh-CN' && <a href="https:/weibo.com/arayasociados/" target="_blank" rel="noreferrer" passHref>
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={weibo} w={25} h={25} alt="weibo logo" />
                <p className="text-xs">Weibo</p>
              </div>
            </a>}

            {/* dou yin */}
            {locale === 'zh-CN' && <a href="https:/douyin.com/arayasociados/" target="_blank" rel="noreferrer" passHref>
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={tiktok} w={25} h={25} alt="tiktok logo" />
                <p className="text-xs">Dou Yin</p>
              </div>
            </a>}

            {/* xiao hong shu */}
            {locale === 'zh-CN' && <a href="https:/xiaohongshu.com/arayasociados/" target="_blank" rel="noreferrer" passHref>
              <div className="flex flex-col items-center hover:bg-gray-100 rounded-md px-2 pb-2 cursor-pointer">
                <Image className="scale-50" src={xiaohongshu} w={25} h={25} alt="xiaohongshu logo" />
                <p className="text-xs">Xiao Hong Shu</p>
              </div>
            </a>}



          </div>

      </div>

    </div>
  )
}

export default Inicio