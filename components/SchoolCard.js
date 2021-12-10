import Link from 'next/link'
import Image from 'next/image'
import wp_terms from '../util/wp_terms.json';
import { myLoader } from '../util/functions'
import placeholder from '/public/images/school-placeholder.png'
import i18n from '../util/i18n.json'
import { useRouter } from 'next/router'

export default function SchoolCard({ el, grid }){
    const router = useRouter();
    const { locale } = router;
    const thumbnail = el['_embedded'] ? el['_embedded']['wp:featuredmedia'][0]['source_url'] : placeholder;
    return (
        <Link href={`/colegio/${el.id}`} passHref>
            <div className={`flex-none ${grid ? "w-full" : "w-5/6 sm:w-80 m-2"} bg-white rounded-lg flex flex-col shadow-lg cursor-pointer`}>
                <div className="bg-gray-100 mb-2 md:mb-0 h-48 relative w-full flex-shrink-0">
                    <Image loader={myLoader} layout="fill" className="object-cover rounded-t-lg" src={thumbnail} alt="preview de colegio" />
                </div>
                <div className="px-4 py-2 h-40">
                    <p className="uppercase text-sm my-1">{i18n[locale].colCole} {wp_terms[locale]['modelo_educativo'][el.ACF.model_educativo]}</p>
                    <h2 className="font-bold text-2xl text-gray-700 capitalize">{Number.isInteger(el.i) && `${el.i + 1}.`} {el.title.rendered.toLowerCase()}</h2>
                    {/* TODO: build rating system with elemnts underneath */}
                    {/* <div className="flex my-4">
                        <div className="rounded-full w-6 h-6 ring-2 ring-primary mr-6"></div>
                        <div className="rounded-full w-6 h-6 ring-2 ring-primary mr-6"></div>
                        <div className="rounded-full w-6 h-6 ring-2 ring-primary"></div>
                    </div> */}
                    <p className="uppercase text-gray-500 text-xs text-right">{el.pais}</p>
                </div>
            </div>
        </Link>
    )
}