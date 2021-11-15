import Image from 'next/image';
import Link from 'next/link';
import SchoolCard from '../components/SchoolCard' 
import ActivityCard from '../components/ActivityCard' 
import map from '/public/images/map.png'
import subsrcibete from '/public/images/subscribete.png'

export default function Actividad(props){
    return(
        <div className="bg-green-100">
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center">
                <h1>campamento de verano</h1>
                <p>caxton college</p>
            </div>
            
            {/* DETALLES */}
            <div className="container mx-auto flex flex-col md:flex-row p-4">
                <div className="md:w-2/3">
                    <h1>informacion general</h1>
                    <hr className="w-8 border-2 border-yellow-500" />
                    <p>Carrer mas de leon, 5, 32455 puçol valencia</p>
                    <p>campamento en la naturaleza</p>
                    <Link href="/"><a className="underline">ver colegio</a></Link>
                </div>
                <div className="md:w-1/3">
                    <h4>fecha</h4>
                    <p>del 11 julio a 26 julio 2021</p>
                </div>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            
            {/* DESCRIPCION */}
            <div className="container mx-auto p-4">
                <h1>descripcion</h1>
                <p>de la actividad</p>
                <hr className="w-8 border-2 border-yellow-500" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />

            {/* MAS INFORMACION */}
            <div className="w-screen bg-yellow-500">
                <div className="container mx-auto py-10 md:rounded bg-white p-4 flex flex-col md:flex-row content-center">
                <div>
                    <h1 className="text-3xl text-gray-700 mb-2 md:mb-4">mas informacion</h1>
                    <p>de la actividad</p>
                    <hr className="border-yellow-500 border-1 md:border-2 w-full my-8 md:mb-0 md:w-16 my-2" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <Link href="/subscribete"><a className="text-center md:text-left md:ml-10"><Image src={subsrcibete} width={50} height={50} alt="flecha derecha" /></a></Link>
                </div>
            </div>

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