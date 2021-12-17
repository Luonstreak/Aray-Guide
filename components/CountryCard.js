import Image from 'next/image'
import Link from 'next/link'
import { myLoader } from '../util/functions';
import { useRouter } from 'next/router'
import i18n from '../util/i18n.json'

export default function CountryCard({ pais }){
    const router = useRouter();
    const text = i18n[router.locale];
    const thumbnail = `https://ouroinc.com/wp-content/uploads/2021/12/${pais.name.replace('ñ', 'n')}.jpg`;

    return <Link href={`/buscar?pais=${pais.id}`} passHref>
        <div className="relative rounded-lg cursor-pointer mx-2">
            <div className="w-full">
                <Image layout="responsive" loader={myLoader} className="rounded-lg" src={thumbnail} width={150} height={175}  alt="preview de actividad"/>
            </div>
            <div className="w-full h-full absolute inset-0  bg-black bg-opacity-30 rounded-lg flex flex-col justify-center items-center">
                <h2 className="text-4xl text-white capitalize mb-2">{text[pais.name]}</h2>
                {/* <p className="uppercase text-white text-md text-right">{pais.numeroColegios || '0'} colegios</p> */}
            </div>
        </div>
    </Link>
}