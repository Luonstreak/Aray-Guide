import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import SchoolCard from '../../components/SchoolCard' 
import ActivityCard from '../../components/ActivityCard' 
import map from '/public/images/map.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import wp_terms from '../../util/wp_terms.json';


export default function Colegio(props){
  
  const router = useRouter()
  const { cid } = router.query
  
  const [details, setDetails] = useState(null)
  const [schools, setSchools] = useState(null)
  const [actividades, setActividades] = useState(null)

    useEffect(() => {
        if(!details){
            axios.get(`https://localhost/aray.new/wp-json/wp/v2/colegios/${cid}?_embed`).then(res => {
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

    if(!details) return <p>loading...</p> 
    else return(
        <div className="bg-green-100">
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center">
                <h1>{details.name}</h1>
                <div clasName="flex gap-4">
                    <p>{wp_terms['poblacion'][details.poblacion]}</p>
                    <p>{wp_terms['provincia'][details.provincia]}</p>
                </div>
            </div>
            
            {/* DETALLES */}
            <div className="container mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3">
                    <h1>{details.name}</h1>
                    <hr className="w-8 border-2 border-yellow-500" />
                    <p>{details.direccion_1} {details.direccion_2} {wp_terms['poblacion'][details.poblacion]} {wp_terms['provincia'][details.provincia]}</p>
                    <p>colegio {wp_terms['model_educativo'][details.model_educativo]}</p>
                    <Link href="/"><a className="underline">Descubre otros colegios</a></Link>
                </div>
                <div className="md:w-1/3">
                    <h4>Cursos</h4>
                    <p className={details.cursos_ofrecidos.includes(7) ? 'text-yellow-500' : 'text-white'}>infantil</p>
                    <p className={details.cursos_ofrecidos.includes(8) ? 'text-yellow-500' : 'text-white'}>primaria</p>
                    <p className={details.cursos_ofrecidos.includes(9) ? 'text-yellow-500' : 'text-white'}>eso</p>
                    <p className={details.cursos_ofrecidos.includes(10) ? 'text-yellow-500' : 'text-white'}>bachillerato</p>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* OPINION */}
            <div className="container mx-auto p-4">
                <h1>opinion</h1>
                <p>de la guia aray</p>
                <hr className="w-8 border-2 border-yellow-500" />
                <p>{details.descripcion}</p>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* CARACTERISTICAS */}
            <div className="container mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3">
                    <h1>caracteristicas</h1>
                    <hr className="w-8 border-2 border-yellow-500" />
                    <ul>
                        {details.curriculum_academico.map(el => <li key={el}>{wp_terms['curriculum_academico'][el]}</li>)}
                        {details.entrevista_de_acceso && <li>se realiza entrevista de acceso</li>}
                        {details.nivel_minimo_de_idioma && <li>nivel minimo de idioma</li>}
                        {details.idioma_que_se_examinara.map(el => <li key={el}>&nbsp;{wp_terms['idioma_principal_de_clases'][el]}</li>)}
                        {details.entrevista_de_accesso && <li>se realiza entrevista de acceso</li>}
                        <li>{details.distribucion_de_clases.split("_").join(" ")}</li>
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <div className="border-l-2 md:border-l-0  md:border-r-2 border-yellow-500 px-4">
                        <h4>idioma del centro</h4>
                        <p>{wp_terms['idioma_principal_de_clases'][details.idioma_principal_de_clases]}</p>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* SERVICIOS */}
            <div className="container mx-auto p-4">
                <h1>servicios</h1>
                <hr className="w-8 border-2 border-yellow-500" />
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex-1">
                        <h4>servicios generales</h4>
                        <ul>
                            {details.servicios_ofrecidos.map(el => <li key={el}>{wp_terms['servicios_ofrecidos'][el]}</li>)}
                        </ul>
                        <h4>servicios especiales</h4>
                        <ul>
                        {details.servicios_especiales.map(el => <li key={el}>{wp_terms['servicios_especiales'][el]}</li>)}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4>comedor</h4>
                        <ul>
                            {details.menu_especial.map(el => <li key={el}>{wp_terms['menu_especial'][el]}</li>)}
                        </ul>
                        <h4>control de alergias</h4>
                        <ul>
                            <li>{details.control_de_alergias ? "si" : "no"}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* INSTALACIONES */}
            <div className="container mx-auto p-4">
                <h1>instalaciones</h1>
                <hr className="w-8 border-2 border-yellow-500" />
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex-1">
                        <ul>
                            {details.equipamiento.map(el => <li key={el}>{wp_terms['equipamiento'][el]}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* INTEGRACION SOCIAL */}
            <div className="container mx-auto p-4">
                <h1>integracion social</h1>
                <hr className="w-8 border-2 border-yellow-500" />
                <ul>
                    {details.programas_de_integracion.map(el => <li key={el}>{wp_terms['programas_de_integracion'][el]}</li>)}
                </ul>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* ACTIVIDADES */}
            <div className="container mx-auto p-4">
                <h2 className="ml-2 uppercase font-bold">Actividades destacadas</h2>
                <div className="flex overflow-x-scroll items-center">
                  {actividades 
                    ? actividades.map(el => <ActivityCard key={el.guid.rendered} el={el} />) 
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
                    <Link href={`mailto:${details.correo_electronico}`}><a className="underline">{details.correo_electronico}</a></Link>
                    <p>{details.telefono}</p>
                    <Link href={details.direccion_web}><a><span className="underline">{details.direccion_web}</span><span className="text-yellow-500">&#x27F6;</span></a></Link>
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
                    ? schools.map(el => <SchoolCard key={el.guid.rendered} el={el} />) 
                    : <p>loading...</p>
                }
                </div>
            </div>
        </div>
    )
}