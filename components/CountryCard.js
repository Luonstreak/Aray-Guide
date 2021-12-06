import Image from 'next/image'
import Link from 'next/link'
import { myLoader } from '../util/functions';

export default function CountryCard({ pais }){
    const thumbnail = `https://api.aray.guide/wp-content/uploads/2021/12/${pais.name.replace('ñ', 'n')}.jpg`;
    return pais.id ? <Link href={`/buscar?pais=${pais.id}`} passHref>
        <div className="relative group flex-none w-5/6 sm:w-80 rounded-lg flex flex-col cursor-pointer">
            <div className="w-full">
                <Image layout="responsive" loader={myLoader} className="rounded-lg" src={thumbnail} width={150} height={175}  alt="preview de actividad"/>
            </div>
            <div className="w-full h-full absolute lg:invisible lg:group-hover:visible inset-0  bg-black bg-opacity-60 rounded-lg flex flex-col justify-center items-center">
                <h2 className="text-4xl text-white capitalize mb-2">{pais.name}</h2>
                {/* <p className="uppercase text-white text-md text-right">{pais.numeroColegios || '0'} colegios</p> */}
            </div>
        </div>
    </Link>
    // TODO: remove this once countries show country count and theres schools for all countries shown
    : <div className="relative group flex-none w-5/6 sm:w-80 rounded-lg flex flex-col">
        <div className="w-full">
            <Image layout="responsive" loader={myLoader} className="rounded-lg" src={thumbnail} width={150} height={175}  alt="preview de actividad"/>
        </div>
        <div className="w-full h-full absolute lg:invisible lg:group-hover:visible inset-0  bg-black bg-opacity-60 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-4xl text-white capitalize mb-2">{pais.name}</h2>
            {/* <p className="uppercase text-white text-md text-right">{pais.numeroColegios || '0'} colegios</p> */}
        </div>
    </div>
}