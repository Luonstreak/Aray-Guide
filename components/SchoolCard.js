import Link from 'next/link'
import Image from 'next/image'
import img1 from '../public/images/2.jpg';

export default function SchoolCard({ el, grid }){
    return (
        <div className={`flex-none ${grid ? "w-full" : "w-5/6 sm:w-1/3 m-2"} bg-white rounded-lg flex flex-col`}>
            <div className="w-full mb-2">
                <Image layout="responsive" className="rounded-t-lg" src={img1} width={150} height={150}  alt="preview de actividad"/>
            </div>
            <div className="px-4 py-2">
                <p className="uppercase text-sm text-gray-500">british school</p>
                <h2 className="font-bold text-2xl text-gray-700"><Link href="/colegio"><a>Nombre de colegio</a></Link></h2>
                <div className="flex my-4">
                    <div className="rounded-full w-6 h-6 ring-2 ring-yellow-400 mr-6"></div>
                    <div className="rounded-full w-6 h-6 ring-2 ring-yellow-400 mr-6"></div>
                    <div className="rounded-full w-6 h-6 ring-2 ring-yellow-400"></div>
                </div>
                <p className="uppercase text-gray-500 text-xs text-right">british school</p>
            </div>
        </div>
    )
}