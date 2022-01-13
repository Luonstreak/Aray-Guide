import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '../../components/Carousel'
import { useEffect, useState } from 'react'
import axios from 'axios'
import wp_terms from '../../util/wp_terms.json'
import location from '/public/images/icons/location.svg'
import phone from '/public/images/icons/phone.svg'
import email from '/public/images/icons/email.svg'
import web from '/public/images/icons/web.svg'
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
import horse from '/public/images/icons/horse.svg'
import placeholder from '/public/images/school.png'
import { myLoader, decodeHTMLEntities } from '../../util/functions'
import i18n from '../../util/i18n.json';

export default function Colegio(props){
  
  const router = useRouter()
  const { locale } = router;
  const text = i18n[locale];
  const { cid } = router.query
    
  const [details, setDetails] = useState(null)
  const [schools, setSchools] = useState(null)
  const [actividades, setActividades] = useState(null)

    useEffect(() => {
        if(cid){
            setDetails(null)
            axios.get(`https://ouroinc.com/wp-json/wp/v2/colegios/${cid}?_embed`).then(res => {
                if (res.data) {
                    let thumbnail = null;
                    if(res.data['_embedded']) {
                        thumbnail = res.data['_embedded']['wp:featuredmedia'][0]['source_url'];
                    }
                    setDetails({ ...res.data, ...res.data.ACF, name: res.data.title.rendered, thumbnail });
                }
            }).catch(err => console.log(err, 'There was an error fetching "Detalles del colegio"'));
        }
        if(!actividades){
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
    },[cid, actividades, schools]);

    const icons_servicios_generales = {
        "65": alojamiento,
        "97": comedor,
        "23": horario_vespertino,
        "22": horario_matutino,
        "21": seguro,
        "20": transporte,
    }
    const icons_servicios_especiales = {
        "36": logopeda,
        "35": psicologia
    }
    const icons_comedor = {
        "66": bajo_en_grasas,
        "98": halal,
        "133": hipercalorico,
        "34": diabetico,
        "31": sin_gluten,
        "32": sin_lactosa,
        "132": vegano,
        "33": vegano
    }
    const icons_equipamiento = {
        "51": accesible,
        "19": aire_acondicionado,
        "18": campo_de_futbol,
        "50": campo_de_tennis,
        "55": instalaciones_olimpicas,
        "16": piscina,
        "17": piscina,
        "93": horse,
    }
    const icons_integracion = {
        "39": igualdad,
        "38": integracion_social,
        "37": prevencion_acoso
    }
    if(!details) return <div className="container mx-auto text-center py-40"><Spinner /></div>
    else {
        const pureUrl = details.direccion_web.replace("http://","").replace("https://","").replace("www.","");
        return (
        <div className="bg-gray-50">
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center relative py-20 lg:py-60 px-4">
                <h1 className={`z-10 ${details.thumbnail ? 'text-white' : 'text-gray-800'} text-3xl lg:text-6xl uppercase mb-4`}>{decodeHTMLEntities(details.name)}</h1>
                <p className={`z-10 ${details.thumbnail ? 'text-white' : 'text-gray-500'} lg:text-2xl capitalize`}>{wp_terms['provincia'][details.provincia]} • {wp_terms[locale]['pais'][details.pais]}</p>
                <div className={`absolute inset-0 z-0 ${details.thumbnail ? '' : 'bg-primarylighter'}`}>
                    <Image priority loader={myLoader} src={details.thumbnail || placeholder} layout='fill' objectFit='cover' className={details.thumbnail ? 'object-cover brightness-50' : 'brightness-100'} alt="" />
                </div>
            </div>
            
            {/* DETALLES */}
            <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row p-4 md:py-20 md:px-4">

                <div className="md:w-2/3 mb-8">
                    <h1 className="text-gray-700 text-2xl md:text-4xl font-bold uppercase">{decodeHTMLEntities(details.name)}</h1>
                    <hr className="title-separator mb-2" />
                    <div className="flex mb-2">
                        <Image src={location} width={16} height={16} alt="location icon" />&nbsp;
                        <p className="capitalize">{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    </div>
                    {details.modelo_educativo !== '154' && <p className="mb-2 capitalize">{text.colCole} {wp_terms[locale]['modelo_educativo'][details.modelo_educativo]}</p>}
                    <Link href="/"><a>{text.colDesc}</a></Link>
                </div>

                <div className="md:w-1/3">
                    <h5 className="mb-2 md:mt-10 font-bold text-gray-700 capitalize">{text.colCurs}</h5>
                    <p className={`${details.cursos_ofrecidos.includes(8) ? 'text-primary' : 'text-gray-400 line-through'} uppercase mb-2 font-bold`}>{wp_terms[locale].cursos_ofrecidos['8']}</p>
                    <p className={`${details.cursos_ofrecidos.includes(9) ? 'text-primary' : 'text-gray-400 line-through'} uppercase mb-2 font-bold`}>{wp_terms[locale].cursos_ofrecidos['9']}</p>
                    <p className={`${details.cursos_ofrecidos.includes(10) ? 'text-primary' : 'text-gray-400 line-through'} uppercase mb-2 font-bold`}>{wp_terms[locale].cursos_ofrecidos['10']}</p>
                    <p className={`${details.cursos_ofrecidos.includes(11) ? 'text-primary' : 'text-gray-400 line-through'} uppercase mb-2 font-bold`}>{wp_terms[locale].cursos_ofrecidos['11']}</p>
                </div>

            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* OPINION */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="uppercase font-bold text-xl md:text-2xl lg:text-4xl">{text.colOpi}</h1>
                <p className="mb-2 uppercase text-gray-400">{text.colOpiSb}</p>
                <hr className="title-separator mb-4" />
                {details.description
                    ? <p>{details.descripcion}</p>
                    : <p className="text-lg text-gray-500 text-center w-full">{text.colOpiEmpt}</p>
                }
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* CARACTERISTICAS */}
            <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3">
                    <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">{text.colCar}</h1>
                    <hr className="title-separator" />
                    <ul>
                        {details.curriculum_academico && <div className="flex items-start pt-4">
                            <div className="flex-shrink-0">
                                <Image src={curriculum} width={24} height={24} alt="" />
                            </div>
                            <div className="ml-2">
                                {details.curriculum_academico.map((el, index) => <li key={el}><p className="uppercase mb-2">{index + 1}. {wp_terms[locale]['curriculum_academico'][el]}</p></li>)}
                            </div>
                        </div>}

                        {details.entrevista_de_acceso && <div className="flex items-start mt-2">
                            <div className="flex-shrink-0">
                                <Image src={entrevista} width={24} height={24} alt="" />
                            </div>
                            <div className="ml-2">
                                <li><p className="uppercase mb-2">{text.colCArEntr}</p></li>
                            </div>
                        </div>}

                        {details.nivel_minimo_de_idioma && <div className="flex items-start mt-2">
                            <div className="flex-shrink-0">
                                <Image src={nivel_minimo} width={24} height={24} alt="" />
                            </div>
                            <div className="ml-2">
                                <li><p className="uppercase mb-2">{text.colCarNiv}</p></li>
                                {details.idioma_que_se_examinara && details.idioma_que_se_examinara.map(el => <li key={el}><p className="uppercase mb-2"><span className="text-primary">•</span> {wp_terms[locale]['idioma_de_clases'][el]}</p></li>)}
                            </div>
                        </div>}
                        <div className="flex items-start mt-2">
                            <div className="flex-shrink-0">
                                <Image src={distribucion} width={24} height={24} alt="" />
                            </div>
                            <div className="ml-2">
                                <li><p className="uppercase mb-2">{details.distribucion_de_clases.split("_").join(" ")}</p></li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <div className="border-l-2 md:border-l-0  md:border-r-2 border-primary px-4 py-4 md:py-2 text-left md:text-right bg-primary bg-opacity-20 md:bg-opacity-0 mt-4 md:mt-0">
                        <h4 className="uppercase text-lg">{text.colLang}</h4>
                        <p className="uppercase text-gray-600">{wp_terms[locale]['idioma_de_clases'][details.idioma_de_clases]}</p>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* SERVICIOS */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">{text.colServ}</h1>
                <hr className="title-separator" />
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex-1">
                        <h5 className="mb-2 mt-4 uppercase font-bold text-gray-700">{text.colServGen}</h5>
                        <ul>
                            {details.servicios_ofrecidos.map(el => <li key={el} className="flex items-center mb-4">
                                <Image src={icons_servicios_generales[el]} width={24} height={24} alt="" />
                                <p className="uppercase ml-2">&nbsp;{wp_terms[locale]['servicios_ofrecidos'][el]}</p>
                            </li>)}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h5 className="mb-2 mt-4 uppercase font-bold text-gray-700">{text.colServEsp}</h5>
                        <ul>
                            {details.servicios_especiales.map(el => <li key={el} className="flex items-center mb-4">
                                <Image src={icons_servicios_especiales[el]} width={24} height={24} alt="" />
                                <p className="uppercase ml-2">{wp_terms[locale]['servicios_especiales'][el]}</p>
                            </li>)}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h5 className="mb-2 mt-4 uppercase font-bold text-gray-700">{text.colCom}</h5>
                        <ul>
                            {details.menu_especial.map(el => <li key={el} className="flex items-center mb-4">
                                <Image src={icons_comedor[el]} width={24} height={24} alt="" />
                                <p className="uppercase ml-2">{wp_terms[locale]['menu_especial'][el]}</p>
                            </li>)}
                        </ul>
                        <h5 className="mb-2 mt-4 uppercase font-bold text-gray-700">{text.colAler}</h5>
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
                <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">{text.colInst}</h1>
                <hr className="title-separator" />
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex-1">
                        <ul>
                            {details.equipamiento.map(el => <li key={el} className="flex items-center mt-4">
                                <Image src={icons_equipamiento[el]} width={24} height={24}/>
                                <p className="uppercase ml-2">{wp_terms[locale]['equipamiento'][el]}</p>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* INTEGRACION SOCIAL */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">{text.colInt}</h1>
                <hr className="title-separator" />
                <ul>
                    {details.programas_de_integracion
                        ? details.programas_de_integracion.map(el => <li key={el} className="flex items-center pt-4">
                            <div className="flex-shrink-0"><Image src={icons_integracion[el]} width={24} height={24} /></div>
                            <p className="uppercase ml-2">{wp_terms[locale]['programas_de_integracion'][el]}</p>
                        </li>)
                        : <p>{text.colProgEmpt}</p>
                    }
                </ul>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* ACTIVIDADES */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">{text.globActDes}</h1>
                <hr className="title-separator mb-8" />
                <Carousel data={actividades} type="activity" />
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* CONTACTO */}
            <div className="container max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl">{text.colCont}</h1>
                    <hr className="title-separator mb-8" />

                    <div className="flex mb-2 ml-8">
                        <Image src={location} width={16} height={16} />&nbsp;&nbsp;
                        <p className="capitalize">{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {details.codigo_postal}, {wp_terms['provincia'][details.provincia]}</p>
                    </div>
                    
                    <div className="flex mb-2 ml-8">
                        <Image src={phone} width={16} height={16} />&nbsp;&nbsp;
                        <p>{details.telefono || text.colNoCom}</p>
                    </div>
                    
                    <div className="flex mb-2 ml-8">
                        <Image src={email} width={16} height={16} />&nbsp;&nbsp;
                        {details.correo_electronico 
                            ? <a href={`mailto:${details.correo_electronico}`} className="underline">{details.correo_electronico}</a>
                            : <p>{text.colNoCom}</p>
                        }
                    </div>
                    
                    <div className="flex mb-2 ml-8">
                        <Image src={web} width={16} height={16} />&nbsp;&nbsp;
                        {details.direccion_web 
                            ? <a href={`https://www.${pureUrl}`} target="_blank" rel="noreferrer"><span className="underline">{pureUrl}</span><span className="text-yellow-500">&#x27F6;</span></a>
                            : <p>{text.colNoCom}</p>
                        }
                    </div>
                </div>
                <div className="flex-1">
                    <Image src={`https://maps.googleapis.com/maps/api/staticmap?zoom=12&size=500x500&maptype=roadmap&markers=color:red|${details.latitude},${details.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_API}`} alt="mapa ubicacion de escuela" width={500} height={500} className="rounded-lg"/>
                </div>
            </div>
            <hr className="container-separator" />

            {/* TE PUEDE INTERESAR */}
            <div className="container max-w-screen-lg mx-auto p-4">
                <h1 className="uppercase font-bold text-xl md:text-2xl lg:text-4xl">{text.colRelac}</h1>
                <hr className="title-separator" />
                <Carousel data={schools} type="school" />
            </div>
        </div>)
    }
}