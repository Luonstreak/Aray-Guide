import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/images/logo-white.svg'
import i18n from '../util/i18n.json'
import { useRouter } from 'next/router'

export default function Subscribete(){
    const router = useRouter();
    const text = i18n[router.locale];
    return (
        <div className="bg-white flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-40 lg:h-screen bg-primarylight flex flex-col justify-center items-center">
                <div>
                    <div className="flex items-end">
                        <p className="text-white text-lg mr-2">{text.subTtl}</p>
                        <Image src={logo} width={50} height={50} alt="logo" />
                    </div>
                    <h1 className="text-white text-5xl font-bold capitalize">{text.subTlt2}</h1>
                    <p className="text-white text-lg text-right">{text.globDeLa}</p>
                </div>
            </div>
            <div className="w-full lg:w-2/3 lg:h-screen bg-white px-4 md:px-40 pt-20 lg:pt-40 pb-12 lg:pb-32">
                <h2 className="text-4xl font-bold uppercase">{text.rellTtl}</h2>
                <p className="mb-10 uppercase mt-2">{text.rellSub}</p>
                <label htmlFor="nombre">{text.subNm}</label>
                <input
                    name="nombre" 
                    type="text" 
                    className="mb-8 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="apellidos">{text.subApe}</label>
                <input
                    name="apellidos"
                    type="text"
                    className="mb-8 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="fdn">{text.subFdn}</label>
                <input
                    name="fdn"
                    type="date"
                    className="mb-8 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="email">{text.subEma}</label>
                <input
                    name="email"
                    type="email"
                    className="mb-8 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <div>
                    <input type="checkbox" id="terminos" name="terminos" />
                    <label htmlFor="terminos" className="text-gray-500">&nbsp;{text.subTerm}<Link href="/terminos"><a className="underline">{text.subTerm2}</a></Link>{text.subTerm3}<Link href="/condiciones"><a className="underline">{text.subTerm4}</a></Link></label>
                </div>
                <button type="submit" className="bg-primary text-white rounded px-4 py-2 ml-auto mt-8 w-full md:w-auto md:mx-auto">{text.subBtn}</button>
            </div>
        </div>
    )
}