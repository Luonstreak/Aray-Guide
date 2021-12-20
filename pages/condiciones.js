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
            <h1 className="z-10 text-white text-3xl lg:text-6xl uppercase mb-4">{text.conTtl}</h1>
            <div className="absolute inset-0 z-0">
                <Image priority src={condiciones} layout="fill" className="object-cover" alt="hero image" />
            </div>
        </div>
        <div className="container max-w-screen-lg mx-auto px-16">
            <h2 className="text-4xl font-bold pt-16">{text.conSubTtl}</h2>
            <hr className="title-separator mb-8" />
            <p className="text-lg text-gray-600 mb-4"><strong>ARA Y ASOCIADOS SVA, S.L.</strong>{text.conDesBdy}</p>
            <p className="text-lg text-gray-600 mb-4"><strong>ARA Y ASOCIADOS SVA, S.L.</strong>{text.conDesBdy2}</p>
            <p className="text-lg text-gray-600 mb-4"><strong>ARA Y ASOCIADOS SVA, S.L.</strong>{text.conDesBdy3}<strong>ARA Y ASOCIADOS SVA, S.L.</strong></p>
            <ol className="list-decimal text-lg text-gray-600 mb-4">
                <li className="mb-4">
                    <strong>{text.conSub2}</strong>
                    <ul className="mt-2 list-disc pl-8">
                        <li><strong>{text.conSub2Ttl}ominio:&nbsp;</strong><a href="https://www.aray.guide" target="_blank" rel="noreferrer">www.aray.guide</a></li>
                        <li><strong>{text.conSub2Ttl2}</strong>{text.conSubTtl2Bdy}</li>
                        <li><strong>{text.conSub2Ttl3}</strong> ARA Y ASOCIADOS SVA, S.L.</li>
                        <li><strong>{text.conSub2Ttl4}</strong>B54635321</li>
                        <li><strong>{text.conSub2Ttl5}</strong>965 20 15 96</li>
                        <li><strong>{text.conSub2Ttl6}</strong>Paseo de la Explanada, 2, Principal Derecha, 03002, Alicante, Alicante</li>
                        <li><strong>{text.conSub2Ttl7}</strong> <a href="mailto:info@arayasociados.com">info@arayasociados.com</a></li>
                    </ul>
                </li>
                <li className="mb-4">
                    <strong>{text.conSobre}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conSobre2}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conSobre3}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conSobre4}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conSobre5}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conSobre6}</p>
                </li>
                <li className="mb-4">
                    <strong>{text.conAcc}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conAcc2}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conAcc3}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conAcc4}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conAcc5}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conAcc6}</p>
                </li>
                <li className="mb-4">
                    <strong>{text.conUso}</strong>
                    <p className="mt-2 text-lg text-gray-500 mb-4">{text.conUso2}</p>
                    <p className="text-lg text-gray-500 mb-4">{text.conUso3}</p>
                    <p className="text-lg text-gray-500 mb-4">{text.conUso4}</p>
                    <ul className="list-disc pl-8">
                        <li>{text.conUso5}</li>
                        <li>{text.conUso6}</li>
                        <li>{text.conUso7}</li>
                        <li>{text.conUso8}</li>
                        <li>{text.conUso9}</li>
                        <li>{text.conUso10}</li>
                        <li>{text.conUso11}</li>
                        <li>{text.conUso12}</li>
                        <li>{text.conUso13}</li>
                    </ul>
                </li>
                <li className="mb-4">
                    <strong>{text.conNues}</strong>
                    <p className="mt-2 text-lg text-gray-500 mb-4">{text.conNues2}</p>
                    <p className="text-lg text-gray-500 mb-4">{text.conNues3}</p>
                    <p className="text-lg text-gray-500 mb-4">{text.conNues4}</p>
                    <ul className="list-disc pl-8">
                        <li>{text.conNues5}</li>
                        <li>{text.conNues6}</li>
                        <li>{text.conNues7}</li>
                        <li>{text.conNues8}</li>
                        <li>{text.conNues9}</li>
                    </ul>
                </li>
                <li className="mb-4">
                    <strong>{text.conInfo}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conInfo2}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conInfo3}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conInfo4}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conInfo5}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conInfo6}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conInfo7}</p>
                </li>
                <li className="mb-4">
                    <strong>{text.conExt}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conExt2}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conExt3}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conExt4}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conExt5}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conExt6}</p>
                </li>
                <li className="mb-4">
                    <strong>{text.conDer}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conDer2}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conDer3}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conDer4}<a href="https://www.aray.guide" target="_blank" rel="noreferrer">www.aray.guide</a></p>
                    <p className="text-lg text-gray-600 mb-4">{text.conDer5}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conDer6}<a href="mailto:info@arayasociados.com">info@arayasociados.com</a> </p>
                </li>
                <li className="mb-4">
                    <strong>{text.conCook}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conCook2}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conCook3}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conCook4}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conCook5}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conCook6}</p>
                </li>
                <li className="mb-4">
                    <strong>{text.conPoli}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conPoli2}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conPoli3}</p>
                    <p className="text-lg text-gray-600 mb-4">{text.conPoli4}</p>
                </li>
                <li className="mb-4">
                    <strong>{text.conIP}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conIp2}</p>
                </li>
                <li className="mb-4">
                    <strong>{text.conCamb}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conCamb2}</p>
                </li>
                <li className="mb-4">
                    <strong>{text.conLey}</strong>
                    <p className="mt-2 text-lg text-gray-600 mb-4">{text.conLey2}.</p>
                </li>
            </ol>
            <p className="text-lg text-gray-600 text-center my-8"><strong>{text.globUlt}</strong>{text.globUltDate}</p>
            <hr className="container-separator" />
        </div>
        </>
    )
}