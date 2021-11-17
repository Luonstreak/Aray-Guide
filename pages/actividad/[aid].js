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

export default function Actividad(props){

    const router = useRouter()
    const { aid } = router.query

    const [details, setDetails] = useState(null)
    const [schools, setSchools] = useState(null)
    const [actividades, setActividades] = useState(null)

    useEffect(() => {
        if(!details){
            axios.get(`https://localhost/aray.new/wp-json/wp/v2/actividades/${aid}?_embed`).then(res => {
                if (res.data) {
                    setDetails({ ...res.data.ACF, name: res.data.title.rendered });
                }
            }).catch(err => console.log(err, 'There was an error fetching "Detalles del colegio"'));
        }
        if(!actividades){
            axios.get('https://localhost/aray.new/wp-json/wp/v2/actividades?_embed').then(res => {
                if (res.data) {
                    setActividades(res.data);
                }
            }).catch(err => console.log(err, 'There was an error fetching "Actviades"'));
        }
        if(!schools){
          axios.get('https://localhost/aray.new/wp-json/wp/v2/colegios?_embed').then(res => {
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
        <div className="bg-green-100">
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center">
                <h1>{details.name}</h1>
                <p>{details.anfitrion.post_title}</p>
            </div>
            
            {/* DETALLES */}
            <div className="container mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3">
                    <h1>informacion general</h1>
                    <hr className="w-8 border-2 border-yellow-500" />
                    <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    <p>{details.tipo}</p>
                    <Link href={`/colegios/${details.anfitrion.ID}?_embed`}><a className="underline">ver colegio</a></Link>
                </div>
                <div className="md:w-1/3">
                    <h4>fecha</h4>
                    <p>del {formatDate(details.desde)} a {formatDate(details.hasta, true)}</p>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* DESCRIPCION */}
            <div className="container mx-auto p-4">
                <h1>descripcion</h1>
                <p>de la actividad</p>
                <hr className="w-8 border-2 border-yellow-500" />
                <p>{details.descripcion}</p>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* MAS INFORMACION */}
            <div className="w-screen bg-primary">
                <div className="container mx-auto py-10 md:rounded bg-white p-4 flex flex-col md:flex-row content-center">
                <div>
                    <h1 className="text-3xl text-gray-700 mb-2 md:mb-4">mas informacion</h1>
                    <p>de la actividad</p>
                    <hr className="border-yellow-500 border-1 md:border-2 w-full my-8 md:mb-0 md:w-16 my-2" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>
                </div>
                <Link href="/subscribete"><a className="text-center md:text-left md:ml-10"><Image src={subsrcibete} alt="flecha derecha" /></a></Link>
                </div>
            </div>

            {/* ACTIVIDADES */}
            <div className="container mx-auto p-4">
                <h2 className="ml-2 uppercase font-bold">Actividades destacadas</h2>
                <div className="flex overflow-x-scroll items-center">
                {actividades 
                    ? actividades.map(el => <ActivityCard key={el.guid} el={el} />) 
                    : <p>loading...</p>
                }
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* CONTACTO */}
            <div className="container mx-auto p-4 flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1>contacto</h1>
                    <hr className="w-8 border-2 border-yellow-500" />
                    <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    <p>{details.telefono}</p>
                    <Link href={details.web}><a><span className="underline">{details.web.replace(/https:\/\/|http:\/\//gi,"")}</span><span className="text-yellow-500">&#x27F6;</span></a></Link>
                </div>
                <div className="flex-1">
                    <Image src={map} alt="map placeholder" />
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* SELECCION */}
            <div className="container mx-auto p-4">
                <h2 className="ml-2 uppercase font-bold">te puede interesar</h2>
                <hr className="w-8 border-2 border-yellow-500" />
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