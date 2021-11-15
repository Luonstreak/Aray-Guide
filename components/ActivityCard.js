import Image from 'next/image'
import Link from 'next/link'
import img1 from '../public/images/1.png';

export default function ActivityCard({ el }){
    return (
        <div className="flex-none w-5/6 sm:w-1/2 bg-white rounded-lg p-4 my-2 mr-4 flex flex-col md:flex-row justify-center">
            <div className="w-full overflow-hidden mb-2 md:mb-0 rounded">
                <Image layout="responsive" className="rounded-md" src={img1} width={150} height={150}  alt="preview de actividad"/>
            </div>
            <div className="md:ml-4">
                <h3 className="font-bold"><Link href="/actividad"><a>Nombre de Actividad</a></Link></h3>
                <hr className="border-yellow-500 border-2 w-16 my-2" />
                <p className="text-gray-500">Breve descripcion de actividad con detalles como direccion, hora, fecha y otras cosas</p>
            </div>
        </div>
    )
}