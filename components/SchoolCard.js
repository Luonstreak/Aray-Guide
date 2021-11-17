import Link from 'next/link'
import Image from 'next/image'

export default function SchoolCard({ el, grid }){
    const thumbnail = el['_embedded']['wp:featuredmedia'][0]['source_url'].replace("https:", 'http://');
    return (
        <Link href={`/colegio/${el.id}`} >
            <div className={`flex-none ${grid ? "w-full" : "w-5/6 sm:w-80 m-2"} bg-white rounded-lg flex flex-col shadow-lg mb-6 cursor-pointer`}>
                <div className="bg-gray-100 mb-2 md:mb-0 h-60 relative w-full flex-shrink-0">
                    <Image layout="fill" className="object-cover rounded-t-lg" src={thumbnail} alt="preview de colegio" />
                </div>
                <div className="px-4 py-2">
                    <p className="uppercase text-sm">british school</p>
                    <h2 className="font-bold text-2xl text-gray-700 h-24 md:h-12 mb-8">{el.title.rendered}</h2>
                    <div className="flex my-4">
                        <div className="rounded-full w-6 h-6 ring-2 ring-primary mr-6"></div>
                        <div className="rounded-full w-6 h-6 ring-2 ring-primary mr-6"></div>
                        <div className="rounded-full w-6 h-6 ring-2 ring-primary"></div>
                    </div>
                    <p className="uppercase text-gray-500 text-xs text-right">{el.pais}</p>
                </div>
            </div>
        </Link>
    )
}