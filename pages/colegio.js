import Image from 'next/image';
import Link from 'next/link';
import SchoolCard from '../components/SchoolCard' 
import ActivityCard from '../components/ActivityCard' 
import map from '/public/images/map.png'

export default function Colegio(props){
    return(
        <div className="bg-green-100">
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center">
                <h1>Caxton college</h1>
                <div clasName="flex gap-4">
                    <p>Valencia</p>
                    <p>Spain</p>
                </div>
            </div>
            
            {/* DETALLES */}
            <div className="container mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3">
                    <h1>Caxton college</h1>
                    <hr className="w-8 border-2 border-yellow-500" />
                    <p>Carrer mas de leon, 5, 32455 puçol valencia</p>
                    <p>british bilingual school</p>
                    <Link href="/"><a className="underline">Descubre otros colegios</a></Link>
                </div>
                <div className="md:w-1/3">
                    <h4>Cursos</h4>
                    <p>infantil</p>
                    <p>primaria</p>
                    <p>eso</p>
                    <p>bachillerato</p>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* OPINION */}
            <div className="container mx-auto p-4">
                <h1>opinion</h1>
                <p>de la guia aray</p>
                <hr className="w-8 border-2 border-yellow-500" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* CARACTERISTICAS */}
            <div className="container mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3">
                    <h1>caracteristicas</h1>
                    <hr className="w-8 border-2 border-yellow-500" />
                    <ul>
                        <li>aice</li>
                        <li>se realiza entrevista de accesso</li>
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <div className="border-l-2 md:border-l-0  md:border-r-2 border-yellow-500 px-4">
                        <h4>idioma del centro</h4>
                        <p>ingles</p>
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
                            <li>transporte escolar</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                        </ul>
                        <h4>servicios especiales</h4>
                        <ul>
                            <li>psicologia infantil</li>
                            <li>...</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4>comedor</h4>
                        <ul>
                            <li>sin gluten</li>
                            <li>halal</li>
                        </ul>
                        <h4>control de alergias</h4>
                        <ul>
                            <li>si</li>
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
                            <li>aire aconidicionado</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul>
                            <li>piscina climatizada</li>
                            <li>...</li>
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
                    <li>aire aconidicionado</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* ACTIVIDADES */}
            <div className="container mx-auto p-4">
                <h2 className="ml-2 uppercase font-bold">Actividades destacadas</h2>
                <div className="flex overflow-x-scroll items-center">
                    {[1,2,3,4,5,6].map(el => {
                        return <ActivityCard key={el} el={el} />
                    })}
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* CONTACTO */}
            <div className="container mx-auto p-4 flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1>contacto</h1>
                    <hr className="w-8 border-2 border-yellow-500" />
                    <p>Carrer mas de leon, 5, 32455 puçol valencia</p>
                    <p>232-256-363</p>
                    <Link href="/caxton.com"><a><span className="underline">caxtoncollege.com</span><span className="text-yellow-500">&#x27F6;</span></a></Link>
                </div>
                <div className="flex-1">
                    <Image src={map} width={500} height={500} alt="map placeholder" />
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* SELECCION */}
            <div className="container mx-auto p-4">
                <h2 className="ml-2 uppercase font-bold">te puede interesar</h2>
                <hr className="w-8 border-2 border-yellow-500" />
                <div className="flex overflow-x-scroll items-center">
                {[1,2,3,4,5,6].map(el => {
                    return <SchoolCard key={el} el={el} />
                })}
                </div>
            </div>
        </div>
    )
}