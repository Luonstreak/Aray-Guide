import Image from 'next/image'
import Link from 'next/link'
import countrypic from '../public/images/3.jpg';

export default function CountryCard({ el }){
    return (
        <div className="relative group flex-none w-5/6 sm:w-1/3 rounded-lg m-2 flex flex-col">
            <div className="w-full mb-2">
                <Image layout="responsive" className="rounded-lg" src={countrypic} width={150} height={175}  alt="preview de actividad"/>
            </div>
            <div className="w-full h-full absolute invisible group-hover:visible top-0 right-0 bottom-0 left-0  bg-black rounded-lg flex flex-col justify-center items-center">
                <Link href="/colegios?q=francia"><h2 className="font-bold text-2xl text-white">Francia</h2></Link>
                <p className="uppercase text-white text-xs text-right">14 colegios</p>
            </div>
        </div>
    )
}