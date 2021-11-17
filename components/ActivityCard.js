import Image from 'next/image'
import Link from 'next/link'

export default function ActivityCard({ el }){
    const thumbnail = el['_embedded']['wp:featuredmedia'][0]['source_url'].replace("https:", 'http://');
    return (
        <Link href={`/actividad/${el.id}?_embed`} passHref>
            <div className="shadow-lg mb-6 flex-none w-5/6 sm:w-1/2 bg-white rounded-lg p-4 my-2 mr-4 flex flex-col md:flex-row justify-center cursor-pointer">
                <div className="bg-gray-100 mb-2 md:mb-0 rounded h-40 relative w-full md:w-40 flex-shrink-0">
                    <Image layout="fill" className="object-cover rounded-md" src={thumbnail}  alt="preview de actividad" />
                </div>
                <div className="md:ml-4">
                    <h3 className="font-bold text-2xl text-gray-600 leading-6 uppercase mt-4">{el.title.rendered}</h3>
                    <hr className="title-separator" />
                    <p className="text-sm">{el.ACF.descripcion.slice(0,100)}...</p>
                </div>
            </div>
        </Link>
    )
}