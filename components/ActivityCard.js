import Image from 'next/image'
import Link from 'next/link'
import { myLoader } from '../util/functions'

export default function ActivityCard({ el }){
    const thumbnail = el['_embedded']['wp:featuredmedia'][0]['source_url'];
    return (
        <Link href={`/actividad/${el.id}?_embed`} passHref>
            <div className="shadow-lg mb-6 flex-none bg-white rounded-lg p-4 m-2 flex flex-col sm:flex-row justify-center cursor-pointer">
                <div className="bg-gray-100 mb-2 sm:mb-0 rounded h-40 relative w-full sm:w-40 flex-shrink-0">
                    <Image loader={myLoader} layout="fill" className="object-cover rounded-md" src={thumbnail}  alt="preview de actividad" />
                </div>
                <div className="sm:ml-4">
                    <h3 className="font-bold text-2xl text-gray-600 leading-6 uppercase">{el.title.rendered}</h3>
                    <hr className="title-separator" />
                    <p className="text-sm">{el.ACF.descripcion.slice(0,100)}...</p>
                </div>
            </div>
        </Link>
    )
}