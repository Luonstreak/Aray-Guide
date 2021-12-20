import condiciones from '/public/images/condiciones.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import i18n from '../util/i18n.json'

export default function Condiciones(){
    const router = useRouter();
    const locale = router.locale;
    const text = i18n[locale];

    return (
        <>
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center relative py-20 md:py-32 lg:py-60">
                <h1 className="z-10 text-white text-3xl lg:text-6xl uppercase mb-4">{text.privTtl}</h1>
                <div className="absolute inset-0 z-0">
                    <Image priority src={condiciones} layout="fill" className="object-cover" alt="hero image" />
                </div>
            </div>
            <div className="container max-w-screen-lg mx-auto px-16">
                <h2 className="text-4xl font-bold pt-16">{text.privSub}</h2>
                <hr className="title-separator mb-8" />
                <ol className="list-decimal">
                    <li className="text-lg text-gray-500">
                        <span className="font-bold uppercase">{text.privSec1Ttl}</span>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body1}<strong>ARA Y ASOCIADOS SVA, S.L.</strong>{text.privSec1Body2}<strong>ARA Y ASOCIADOS</strong>{text.privSec1Body3}</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body5}</strong></p>
                        <p className="text-lg text-gray-500 mb-4"><strong>ARA Y ASOCIADOS SVA, S.L.</strong>{text.privSec1Body6}</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body7}</strong></p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body8}</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>{text.privSec1Lst1}</li>
                            <li>{text.privSec1Lst2}</li>
                            <li>{text.privSec1Lst3}</li>
                            <li>{text.privSec1Lst4}</li>
                            <li>{text.privSec1Lst5}</li>
                            <li>{text.privSec1Lst6}</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body9}</strong></p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body10}</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>{text.privSec1Lst7}</li>
                            <li>{text.privSec1Lst8}</li>
                            <li>{text.privSec1Lst9}</li>
                            <li>{text.privSec1Lst10}</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body11}</strong></p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body12}</p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body13}</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body14}</strong></p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body15}</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>{text.privSec1Lst11}</li>
                            <li>{text.privSec1Lst12}</li>
                            <li>{text.privSec1Lst13}</li>
                            <li>{text.privSec1Lst14}</li>
                            <li>{text.privSec1Lst15}</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body16}</strong></p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body17}</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>{text.privSec1Lst16}</li>
                            <li>{text.privSec1Lst17}</li>
                            <li>{text.privSec1Lst18}</li>
                            <li>{text.privSec1Lst19}</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body18}</strong></p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body19}</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body20}</strong></p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body21}</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body22}</strong></p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec1Body23}</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>{text.privSec1Lst20}</li>
                            <li>{text.privSec1Lst21}</li>
                            <li>{text.privSec1Lst22}</li>
                            <li>{text.privSec1Lst23}</li>
                            <li>{text.privSec1Lst24}</li>
                            <li>{text.privSec1Lst25}</li>
                            <li>{text.privSec1Lst26}</li>
                            <li>{text.privSec1Lst27}</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>{text.privSec1Body24}</strong></p>
                        <address className="mb-4">
                            <h1>ARA Y ASOCIADOS SVA, S.L.</h1>
                            <p className="text-lg text-gray-500">Paseo de la Esplanada de España, 2</p>
                            <p className="text-lg text-gray-500">03002 Alicante, España</p>
                            <a href="mailto:Email: rgpd@arayasociados.com">rgpd@arayasociados.com</a>
                        </address>
                    </li>
                    <li className="text-lg text-gray-500">
                        <span className="font-bold uppercase">{text.privSec2Ttl}</span>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec2Body1}</p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec2Body2}</p>
                    </li>
                    <li className="text-lg text-gray-500">
                        <span className="font-bold uppercase">{text.privSec3Ttl}</span>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec3Body1}</p>
                        <p className="text-lg text-gray-500 mb-4">{text.privSec3Body2} <strong>ARA Y ASOCIADOS SVA, S.L.</strong></p>
                    </li>
                </ol>
                <p className="text-lg text-gray-500 text-center my-8"><strong>{text.globUlt} </strong>{text.globUltDate}</p>
                <hr className="container-separator" />
            </div>
        </>
    )
}