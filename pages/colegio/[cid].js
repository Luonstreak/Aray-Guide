import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import SchoolCard from '../../components/SchoolCard' 
import ActivityCard from '../../components/ActivityCard' 
import { useEffect, useState } from 'react'
import axios from 'axios'
import wp_terms from '../../util/wp_terms.json'
import location from '/public/images/icons/location.svg'
import phone from '/public/images/icons/phone.svg'
import email from '/public/images/icons/email.svg'
import web from '/public/images/icons/web.svg'
import Map from '../../components/Map'
import Spinner from '../../components/Spinner'
import curriculum from '/public/images/icons/curriculum_academico.svg'
import entrevista from '/public/images/icons/entrevista_de_acceso.svg'
import nivel_minimo from '/public/images/icons/nivel_minimo_de_idioma.svg'
import distribucion from '/public/images/icons/distribucion.svg'
import transporte from '/public/images/icons/transporte.svg'
import comedor from '/public/images/icons/comedor.svg'
import horario_matutino from '/public/images/icons/horario_matutino.svg'
import horario_vespertino from '/public/images/icons/horario_vespertino.svg'
import seguro from '/public/images/icons/seguro_de_salud.svg'
import alojamiento from '/public/images/icons/alojamiento.svg'
import logopeda from '/public/images/icons/logopeda.svg'
import psicologia from '/public/images/icons/psicologia.svg'
import bajo_en_grasas from '/public/images/icons/bajo_en_grasas.svg'
import halal from '/public/images/icons/halal.svg'
import hipercalorico from '/public/images/icons/hipercalorico.svg'
import diabetico from '/public/images/icons/diabetico.svg'
import sin_gluten from '/public/images/icons/sin_gluten.svg'
import sin_lactosa from '/public/images/icons/sin_lactosa.svg'
import vegano from '/public/images/icons/vegano.svg'
import si from '/public/images/icons/si.svg'
import accesible from '/public/images/icons/accesible.svg'
import aire_acondicionado from '/public/images/icons/aire_acondicionado.svg'
import campo_de_futbol from '/public/images/icons/campo_de_futbol.svg'
import campo_de_tennis from '/public/images/icons/campo_de_tennis.svg'
import instalaciones_olimpicas from '/public/images/icons/instalaciones_olimpicas.svg'
import piscina from '/public/images/icons/piscina.svg'
import igualdad from '/public/images/icons/igualdad.svg'
import integracion_social from '/public/images/icons/integracion_social.svg'
import prevencion_acoso from '/public/images/icons/prevencion_acoso.svg'
import { myLoader } from '../../util/functions'

export default function Colegio(props){
  
  const router = useRouter()
  const { cid } = router.query
    
  const [details, setDetails] = useState(null)
  const [schools, setSchools] = useState(null)
  const [actividades, setActividades] = useState(null)

    useEffect(() => {
        if(!details && cid){
            axios.get(`https://api.aray.guide/wp-json/wp/v2/colegios/${cid}?_embed`).then(res => {
                if (res.data) {
                    const thumbnail = res.data['_embedded']['wp:featuredmedia'][0]['source_url']
                    setDetails({ ...res.data.ACF, name: res.data.title.rendered, thumbnail });
                }
            }).catch(err => console.log(err, 'There was an error fetching "Detalles del colegio"'));
        }
        if(!actividades){
            axios.get('https://api.aray.guide/wp-json/wp/v2/actividades?_embed').then(res => {
                if (res.data) {
                    setActividades(res.data);
                }
            }).catch(err => console.log(err, 'There was an error fetching "Actviades"'));
        }
        if(!schools){
          axios.get('https://api.aray.guide/wp-json/wp/v2/colegios?_embed').then(res => {
            if (res.data) {
                setSchools(res.data);
            }
          }).catch(err => console.log(err, 'There was an error fetching "Colegios"'));
        }
    });

    const icons_servicios_generales = {
        "61": alojamiento,
        "93": comedor,
        "22": horario_matutino,
        "23": horario_vespertino,
        "21": seguro,
        "20": transporte,
    }
    const icons_servicios_especiales = {
        "36": logopeda,
        "35": psicologia
    }
    const icons_comedor = {
        "62": bajo_en_grasas,
        "94": halal,
        "132": hipercalorico,
        "34": diabetico,
        "31": sin_gluten,
        "32": sin_lactosa,
        "131": vegano,
        "33": vegano
    }
    const icons_equipamiento = {
        "48": accesible,
        "19": aire_acondicionado,
        "18": campo_de_futbol,
        "47": campo_de_tennis,
        "52": instalaciones_olimpicas,
        "16": piscina,
        "17": piscina
    }
    const icons_integracion = {
        "157": igualdad,
        "156": integracion_social,
        "155": prevencion_acoso
    }

    if(!details) return <Spinner />
    else return(
        <div className="bg-gray-50">
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center relative py-20 lg:py-60">
                <h1 className="z-10 text-white text-3xl lg:text-6xl uppercase mb-4">{details.name}</h1>
                <p className="z-10 text-white lg:text-2xl lg:text-gray-300 capitalize">{wp_terms['provincia'][details.provincia]} • {wp_terms['pais'][details.pais]}</p>
                <div className="absolute inset-0 z-0">
                    <Image priority loader={myLoader} src={details.thumbnail} layout="fill" className="object-cover brightness-50" alt="hero image" />
                </div>
            </div>
            
            {/* DETALLES */}
            <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row p-4 md:py-20 md:px-4">

                <div className="md:w-2/3 mb-8">
                    <h1 className="text-gray-700 text-2xl md:text-4xl font-bold uppercase">{details.name}</h1>
                    <hr className="title-separator mb-2" />
                    <div className="flex mb-2">
                        <Image src={location} width={16} height={16} />&nbsp;
                        <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    </div>
                    {details.modelo_educativo !== '154' && <p className="mb-2 capitalize">colegio {wp_terms['modelo_educativo'][details.modelo_educativo]}</p>}
                    <Link href="/"><a>Descubre otros colegios</a></Link>
                </div>

                <div className="md:w-1/3">
                    <h5 className="mb-2 md:mt-10 font-bold text-gray-700">Cursos</h5>
                    <p className={`${details.cursos_ofrecidos.includes(7) ? 'text-primary' : 'text-gray-400 line-through'} uppercase mb-2 font-bold`}>infantil</p>
                    <p className={`${details.cursos_ofrecidos.includes(8) ? 'text-primary' : 'text-gray-400 line-through'} uppercase mb-2 font-bold`}>primaria</p>
                    <p className={`${details.cursos_ofrecidos.includes(9) ? 'text-primary' : 'text-gray-400 line-through'} uppercase mb-2 font-bold`}>eso</p>
                    <p className={`${details.cursos_ofrecidos.includes(10) ? 'text-primary' : 'text-gray-400 line-through'} uppercase mb-2 font-bold`}>bachillerato</p>
                </div>

            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* OPINION */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="uppercase font-bold text-xl md:text-2xl lg:text-4xl">Opinión</h1>
                <p className="mb-2 uppercase text-gray-400">de la guia aray</p>
                <hr className="title-separator mb-4" />
                {details.description
                    ? <p>{details.descripcion}</p>
                    : <p className="text-lg text-gray-500 text-center w-full">Agregaremos una opinion sobre este colegio pronto</p>
                }
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* CARACTERISTICAS */}
            <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3">
                    <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">caracteristicas</h1>
                    <hr className="title-separator" />
                    <ul>
                        {details.curriculum_academico && <div className="flex items-start mt-4">
                            <div className="flex-shrink-0">
                                <Image src={curriculum} width={24} height={24}/>
                            </div>
                            <div className="ml-2">
                                {details.curriculum_academico.map((el, index) => <li key={el}><p className="uppercase mb-2">{index + 1}. {wp_terms['curriculum_academico'][el]}</p></li>)}
                            </div>
                        </div>}

                        {details.entrevista_de_acceso && <div className="flex items-start mt-2">
                            <div className="flex-shrink-0">
                                <Image src={entrevista} width={24} height={24}/>
                            </div>
                            <div className="ml-2">
                                <li><p className="uppercase mb-2">se realiza entrevista de acceso</p></li>
                            </div>
                        </div>}

                        {details.nivel_minimo_de_idioma && <div className="flex items-start mt-2">
                            <div className="flex-shrink-0">
                                <Image src={nivel_minimo} width={24} height={24}/>
                            </div>
                            <div className="ml-2">
                                <li><p className="uppercase mb-2">nivel minimo de idioma</p></li>
                                {details.idioma_que_se_examinara && details.idioma_que_se_examinara.map(el => <li key={el}><p className="uppercase mb-2"><span className="text-primary">•</span> {wp_terms['idioma_de_clases'][el]}</p></li>)}
                            </div>
                        </div>}
                        {details.entrevista_de_accesso && <li><p className="uppercase mb-2">se realiza entrevista de acceso</p></li>}
                        <div className="flex items-start mt-2">
                            <div className="flex-shrink-0">
                                <Image src={distribucion} width={24} height={24}/>
                            </div>
                            <div className="ml-2">
                                <li><p className="uppercase mb-2">{details.distribucion_de_clases.split("_").join(" ")}</p></li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <div className="border-l-2 md:border-l-0  md:border-r-2 border-primary px-4 text-right">
                        <h4 className="uppercase text-lg">idioma del centro</h4>
                        <p className="uppercase text-gray-600">{wp_terms['idioma_de_clases'][details.idioma_de_clases]}</p>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* SERVICIOS */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">servicios</h1>
                <hr className="title-separator" />
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex-1">
                        <h5 className="mb-2 mt-4 uppercase font-bold text-gray-700">servicios generales</h5>
                        <ul>
                            {details.servicios_ofrecidos.map(el => <li key={el} className="flex items-center mb-4">
                                <Image src={icons_servicios_generales[el]} width={24} height={24}/>
                                <p className="uppercase ml-2">&nbsp;{wp_terms['servicios_ofrecidos'][el]}</p>
                            </li>)}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h5 className="mb-2 mt-4 uppercase font-bold text-gray-700">servicios especiales</h5>
                        <ul>
                            {details.servicios_especiales.map(el => <li key={el} className="flex items-center mb-4">
                                <Image src={icons_servicios_especiales[el]} width={24} height={24}/>
                                <p className="uppercase ml-2">{wp_terms['servicios_especiales'][el]}</p>
                            </li>)}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h5 className="mb-2 mt-4 uppercase font-bold text-gray-700">comedor</h5>
                        <ul>
                            {details.menu_especial.map(el => <li key={el} className="flex items-center mb-4">
                                <Image src={icons_comedor[el]} width={24} height={24}/>
                                <p className="uppercase ml-2">{wp_terms['menu_especial'][el]}</p>
                            </li>)}
                        </ul>
                        <h5 className="mb-2 mt-4 uppercase font-bold text-gray-700">control de alergias</h5>
                        <ul>
                            <li className="flex items-center mb-4">
                                {details.control_de_alergias && <Image src={si} width={24} height={24}/>}
                                <p className="uppercase ml-2">{details.control_de_alergias ? "si" : "no"}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* INSTALACIONES */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">instalaciones</h1>
                <hr className="title-separator" />
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex-1">
                        <ul>
                            {details.equipamiento.map(el => <li key={el} className="flex items-center mt-4">
                                <Image src={icons_equipamiento[el]} width={24} height={24}/>
                                <p className="uppercase ml-2">{wp_terms['equipamiento'][el]}</p>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* INTEGRACION SOCIAL */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">integracion social</h1>
                <hr className="title-separator" />
                <ul>
                    {details.programas_de_integracion 
                        ? details.programas_de_integracion.map(el => <li key={el} className="flex items-center mt-4">
                            <Image src={icons_integracion[el]} width={24} height={24}/>
                            <p className="uppercase ml-2">{wp_terms['programas_de_integracion'][el]}</p>
                        </li>)
                        : <p>no programas de integracion social</p>
                    }
                </ul>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* ACTIVIDADES */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">Actividades destacadas</h1>
                <hr className="title-separator mb-8" />
                <div className="flex overflow-x-scroll items-center">
                  {actividades 
                    ? actividades.length > 0
                        ? actividades.map(el => <ActivityCard key={el.guid.rendered} el={el} />)
                        : <p className="text-lg text-gray-500 text-center w-full">No hay actividades en este momento</p>
                    : <p>loading...</p>
                  }
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* CONTACTO */}
            <div className="container max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">contacto</h1>
                    <hr className="title-separator mb-8" />

                    <div className="flex mb-2 ml-8">
                        <Image src={location} width={16} height={16} />&nbsp;&nbsp;
                        <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {details.codigo_postal}, {wp_terms['provincia'][details.provincia]}</p>
                    </div>
                    
                    <div className="flex mb-2 ml-8">
                        <Image src={phone} width={16} height={16} />&nbsp;&nbsp;
                        <p>{details.telefono || 'no compartido'}</p>
                    </div>
                    
                    <div className="flex mb-2 ml-8">
                        <Image src={email} width={16} height={16} />&nbsp;&nbsp;
                        {details.correo_electronico 
                            ? <Link href={`mailto:${details.correo_electronico}`}><a className="underline">{details.correo_electronico}</a></Link>
                            : <p>no compartido</p>
                        }
                    </div>
                    
                    <div className="flex mb-2 ml-8">
                        <Image src={web} width={16} height={16} />&nbsp;&nbsp;
                        {details.direccion_web 
                            ? <a href={details.direccion_web} target="_blank" rel="noreferrer"><span className="underline">{details.direccion_web}</span><span className="text-yellow-500">&#x27F6;</span></a>
                            : <p>no compartido</p>
                        }
                    </div>
                </div>
                <div className="flex-1">
                    <Map markers={[{ ACF: details }]} className="h-64" zoomLevel={8} center={details} />
                </div>
            </div>
            <hr className="container-separator" />

            {/* TE PUEDE INTERESAR */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="uppercase font-bold text-xl md:text-2xl lg:text-4xl">te puede interesar</h1>
                <hr className="title-separator" />
                <div className="flex overflow-x-scroll items-center">
                {schools 
                    ? schools.map(el => <SchoolCard key={el.guid.rendered} el={el} />) 
                    : <p>loading...</p>
                }
                </div>
            </div>
        </div>
    )
}