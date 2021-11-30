import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import SchoolCard from '../../components/SchoolCard' 
import ActivityCard from '../../components/ActivityCard' 
import map from '/public/images/map.png'
import subsrcibete from '/public/images/subscribete.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import wp_terms from '../../util/wp_terms.json';
import location from '/public/images/icons/location.svg'
import phone from '/public/images/icons/phone.svg'
import web from '/public/images/icons/web.svg'
import email from '/public/images/icons/email.svg'

export default function Actividad(props){

    const router = useRouter()
    const { aid } = router.query

    const [details, setDetails] = useState(null)
    const [schools, setSchools] = useState(null)
    const [actividades, setActividades] = useState(null)

    useEffect(() => {
        if(!details){
            axios.get(`http://localhost/aray.new/wp-json/wp/v2/actividades/${aid}?_embed`).then(res => {
                if (res.data) {
                    const thumbnail = res.data['_embedded']['wp:featuredmedia'][0]['source_url'].replace("https:", 'http://');
                    setDetails({ ...res.data.ACF, name: res.data.title.rendered, thumbnail });
                }
            }).catch(err => console.log(err, 'There was an error fetching "Detalles del colegio"'));
        }
        if(!actividades){
            axios.get('http://localhost/aray.new/wp-json/wp/v2/actividades?_embed').then(res => {
                if (res.data) {
                    setActividades(res.data);
                }
            }).catch(err => console.log(err, 'There was an error fetching "Actviades"'));
        }
        if(!schools){
          axios.get('http://localhost/aray.new/wp-json/wp/v2/colegios?_embed').then(res => {
            if (res.data) {
                setSchools(res.data);
            }
          }).catch(err => console.log(err, 'There was an error fetching "Colegios"'));
        }
    });

    const formatDate = (date, year) => {
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const sections = date.split("/");
        return `${sections[0]} de ${months[sections[1] - 1]}${year ? ` ${sections[2]}` : ''}`;
    }

    if(!details) return <p>loading...</p> 
    else return(
        <div className="bg-gray-50">
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center relative py-20 lg:py-60">
                <h1 className="z-10 text-white text-3xl lg:text-6xl uppercase mb-4">{details.name}</h1>
                <p className="z-10 text-white lg:text-2xl lg:text-gray-300">{details.anfitrion.post_title}</p>
                <div className="absolute inset-0 z-0">
                    <Image priority src={details.thumbnail} layout="fill" className="object-cover brightness-50" alt="hero image" />
                </div>
            </div>
            
            {/* DETALLES */}
            <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3 mt-8">
                    <h1 className="text-gray-700 text-2xl md:text-4xl font-bold uppercase">informacion general</h1>
                    <hr className="title-separator mb-8" />
                    <div className="flex mb-2">
                        <Image src={location} width={16} height={16} />&nbsp;
                        <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    </div>
                    <p className="uppercase mb-4">{details.tipo}</p>
                    <Link href={`/colegio/${details.anfitrion.ID}?_embed`}><a className="underline uppercase">{details.anfitrion.post_title}</a></Link>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-16">
                    <h5 className="uppercase text-gray-700 font-bold text-md mb-4">fecha</h5>
                    <p className="uppercase font-bold text-primary">{details.desde === details.hasta ? formatDate(details.desde) : `del ${formatDate(details.desde)} a ${formatDate(details.hasta, true)}`}</p>
                </div>
            </div>
            
            {/* DESCRIPCION */}
            <hr className="container-separator" />
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="uppercase text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">descripción</h1>
                <p className="mb-2 uppercase text-gray-400">de la actividad</p>
                <hr className="title-separator mb-8" />
                <p>{details.descripcion}</p>
            </div>

            {/* MAS INFORMACION */}
            <hr className="container-separator" />
            <div className="w-screen py-20 mt-32 mb-80 bg-primary relative">
                <a href={details.web} target="_blank">
                    <div className="absolute inset-x-0 md:left-10 md:right-10 lg:left-1/3 lg:right-1/3 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col md:flex-row md:items-center ">
                        <div>
                            <h1 className="text-4xl font-bold capitalize mb-2">mas informacion</h1>
                            <p className="text-gray-500 mb-4">de la actividad</p>
                            <hr className="title-separator" />
                            <p className="mb-2">Descubre todo lo que necesitas saber sobre la guia de colegios mas completa que Aray ha desarollado para que todo sea mas comodo y sensillo para ti</p>
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
            <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">Actividades destacadas</h1>
                <hr className="title-separator mb-8" />
                <div className="flex overflow-x-scroll items-center">
                {actividades 
                    ? actividades.map(el => <ActivityCard key={el.guid} el={el} />) 
                    : <p>loading...</p>
                }
                </div>
            </div>

            {/* CONTACTO */}
            <hr className="container-separator" />
            <div className="container max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">contacto</h1>
                    <hr className="title-separator mb-8" />

                    <div className="flex mb-2 ml-8">
                        <Image src={location} width={16} height={16} />&nbsp;&nbsp;
                        <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    </div>

                    <div className="flex mb-2 ml-8">
                        <Image src={phone} width={16} height={16} />&nbsp;&nbsp;
                        <p>{details.telefono || 'no compartido'}</p>
                    </div>
                    
                    <div className="flex mb-2 ml-8">
                        <Image src={email} width={16} height={16} />&nbsp;&nbsp;
                        {details.correo_electronico ? (<Link href={`mailto:${details.correo_electronico}`}><a className="underline">{details.correo_electronico}</a></Link>) : (<p>no compartido</p>)}
                    </div>
                    
                </div>
                <div className="flex-1">
                    <Image src={map} alt="map placeholder" />
                </div>
            </div>
            <hr className="container-separator" />

            {/* SELECCION */}
            <div className="container max-w-screen-lg mx-auto pb-8 md:pb-16 p-4">
                <h1 className="uppercase font-bold text-xl md:text-2xl lg:text-4xl">te puede interesar</h1>
                <hr className="title-separator" />
                <div className="flex overflow-x-scroll items-center">
                {schools 
                    ? schools.map(el => <SchoolCard key={el.guid} el={el} />) 
                    : <p>loading...</p>
                }
                </div>
            </div>
        </div>
    )
}