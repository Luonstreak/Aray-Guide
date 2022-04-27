import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '../../components/Carousel'
import map from '/public/images/map.png'
import subsrcibete from '/public/images/subscribete.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import wp_terms from '../../util/wp_terms.json'
import location from '/public/images/icons/location.svg'
import phone from '/public/images/icons/phone.svg'
import web from '/public/images/icons/web.svg'
import email from '/public/images/icons/email.svg'
import { myLoader } from '../../util/functions'
import i18n from '../../util/i18n.json'

export default function Actividad(props){

    const router = useRouter()
    const { locale } = router;
    const { eid } = router.query

    const [details, setDetails] = useState(null)
    const [schools, setSchools] = useState(null)
    const [event, setEvents] = useState(null)

    useEffect(() => {
        if(!details && eid){
            setDetails(null);
            axios.get(`https://ouroinc.com/wp-json/wp/v2/actividades/${eid}?_embed`).then(res => {
                if (res.data) {
                    const thumbnail = res.data['_embedded']['wp:featuredmedia'][0]['source_url']
                    setDetails({ ...res.data.ACF, name: res.data.title.rendered, thumbnail });
                }
            }).catch(err => console.log(err, 'There was an error fetching "Detalles del colegio"'));
        }
        if(details && !details.direccion_1){
            axios.get(`https://ouroinc.com/wp-json/wp/v2/colegios/${details.anfitrion.ID}?_embed`).then(res => {
                const parentProps = {
                    direccion_1: res.data.ACF.direccion_1,
                    direccion_2: res.data.ACF.direccion_2,
                    poblacion: res.data.ACF.poblacion,
                    provincia: res.data.ACF.provincia,
                    pais: res.data.ACF.pais,
                    latitude: res.data.ACF.latitude,
                    longitude: res.data.ACF.longitude,
                    telefono: res.data.ACF.telefono,
                    correo_electronico: res.data.ACF.correo_electronico,

                }
                setDetails({ ...details, ...parentProps });
            }).catch(err => console.log(err, 'There was an error fetching "Detalles del colegio"'));
        }
        if(!event){
            axios.get('https://ouroinc.com/wp-json/wp/v2/actividades?_embed').then(res => {
                if (res.data) {
                    setActividades(res.data);
                }
            }).catch(err => console.log(err, 'There was an error fetching "Actviades"'));
        }
        if(!schools){
          axios.get('https://ouroinc.com/wp-json/wp/v2/colegios?_embed').then(res => {
            if (res.data) {
                setSchools(res.data);
            }
          }).catch(err => console.log(err, 'There was an error fetching "Colegios"'));
        }
    },[eid, schools, event, details]);

    const formatDate = (date, year) => {
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const sections = date.split("/");
        return `${sections[0]} de ${months[sections[1] - 1]}${year ? ` ${sections[2]}` : ''}`;
    }

    if(!details) return <p>loading...</p> 
    else return(
        <div className="bg-gray-50">
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center relative py-20 md:py-32 lg:py-44 p-4">
                <h1 className="z-10 text-white text-3xl md:text-4xl lg:text-5xl uppercase mb-4 md:px-40">{details.name}</h1>
                <p className="z-10 text-white lg:text-2xl lg:text-gray-300">{details.anfitrion.post_title}</p>
                <div className="absolute inset-0 z-0">
                    <Image priority loader={myLoader} src={details.thumbnail} layout="fill" className="object-cover brightness-50" alt="hero image" />
                </div>
            </div>
            
            {/* DETALLES */}
            <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3 mt-8">
                    <h1 className="text-gray-700 text-2xl md:text-4xl font-bold uppercase">{i18n[locale].actInfo}</h1>
                    <hr className="title-separator mb-8" />
                    {details.direccion_1 && <div className="flex mb-2">
                        <Image src={location} width={16} height={16} alt="map pin icon" />&nbsp;
                        <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    </div>}
                    <p className="uppercase mb-4">{details.tipo}</p>
                    <Link href={`/colegio/${details.anfitrion.ID}?_embed`}><a className="underline uppercase">{details.anfitrion.post_title}</a></Link>
                </div>
                {details.desde && <div className="md:w-1/3 mt-8 md:mt-16">
                    <h5 className="uppercase text-gray-700 font-bold text-md mb-4">{i18n[locale].actDate}</h5>
                    <p className="uppercase font-bold text-primary">{details.desde === details.hasta ? formatDate(details.desde) : `del ${formatDate(details.desde)} a ${formatDate(details.hasta, true)}`}</p>
                </div>}
            </div>
            
            {/* DESCRIPCION */}
            <hr className="container-separator" />
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="uppercase text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">{i18n[locale].actDes}</h1>
                <p className="mb-2 uppercase text-gray-400">{i18n[locale].globDeLa}</p>
                <hr className="title-separator mb-8" />
                <p className='max-w-screen-sm leading-relaxed'>{details.descripcion}</p>
            </div>

            {/* MAS INFORMACION */}
            <hr className="container-separator" />
            <div className="w-screen py-20 mt-32 mb-80 bg-primary relative">
                <a href={details.web} target="_blank" rel="noreferrer">
                    <div className="absolute inset-x-0 md:left-10 md:right-10 lg:left-1/3 lg:right-1/3 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col md:flex-row md:items-center ">
                        <div>
                            <h1 className="text-4xl font-bold capitalize mb-2">{i18n[locale].actMas}</h1>
                            <p className="text-gray-500 mb-4">{i18n[locale].globDeLa}</p>
                            <hr className="title-separator" />
                            <p className="mb-2">{i18n[locale].actDecu}</p>
                        </div>
                        <div className="mx-auto md:w-40 mt-4 md:mt-0">
                            <Image src={subsrcibete} width={50} height={50} alt="flecha derecha" />
                        </div>
                    </div>
                </a>
            </div>

            {/* ACTIVIDADES */}
            <hr className="container-separator" />
            <div className="container max-w-screen-lg mx-auto p-4">
            <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">{i18n[locale].globActDes}</h1>
            <hr className="title-separator mb-8" />
            <Carousel data={actividades} type="activity" />
            </div>

            {/* CONTACTO */}
            <hr className="container-separator" />
            <div className="container max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">{i18n[locale].actCont}</h1>
                    <hr className="title-separator mb-8" />

                    <div className="flex mb-2">
                        <Image src={location} width={16} height={16} alt="location icon" />&nbsp;&nbsp;
                        <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    </div>

                    <div className="flex mb-2">
                        <Image src={phone} width={16} height={16} alt="phone icon" />&nbsp;&nbsp;
                        <p>{details.telefono || 'no compartido'}</p>
                    </div>
                    
                    <div className="flex mb-2">
                        <Image src={email} width={16} height={16} alt="email icon" />&nbsp;&nbsp;
                        {details.correo_electronico ? (<Link href={`mailto:${details.correo_electronico}`}><a className="underline">{details.correo_electronico}</a></Link>) : (<p>no compartido</p>)}
                    </div>
                    
                </div>
                <div className="flex-1">
                <Image src={`https://maps.googleapis.com/maps/api/staticmap?zoom=12&size=500x500&maptype=roadmap&markers=color:red|${details.latitude},${details.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_API}`} alt="mapa ubicacion de escuela" width={500} height={500} className="rounded-lg"/>
                </div>
            </div>
            <hr className="container-separator" />

            {/* SELECCION */}
            <div className="container max-w-screen-lg mx-auto pb-8 md:pb-16 p-4">
                <h1 className="uppercase font-bold text-xl md:text-2xl lg:text-4xl">{i18n[locale].actRelac}</h1>
                <hr className="title-separator" />
                <Carousel data={schools} type="school" />
            </div>
        </div>
    )
}