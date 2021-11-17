import Image from 'next/image'
import Link from 'next/link'

export default function CountryCard({ pais }){
    const thumbnail = `http://localhost/aray.new/wp-content/uploads/2021/11/${pais.name}.jpg`;
    return (
        <div className="relative group flex-none w-5/6 sm:w-80 rounded-lg flex flex-col">
            <div className="w-full">
                <Image layout="responsive" className="rounded-lg" src={thumbnail} width={150} height={175}  alt="preview de actividad"/>
            </div>
            <div className="w-full h-full absolute invisible group-hover:visible inset-0  bg-black bg-opacity-60 rounded-lg flex flex-col justify-center items-center">
                <Link href="/colegios?pais=francia" passHref><h2 className="text-4xl text-white capitalize mb-2">{pais.name}</h2></Link>
                <p className="uppercase text-white text-md text-right">{pais.numeroColegios || '0'} colegios</p>
            </div>
        </div>
    )
}