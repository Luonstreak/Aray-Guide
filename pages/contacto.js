import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/images/logo-white.svg'
import i18n from '../util/i18n.json'
import { useRouter } from 'next/router'

export default function Contacto(){
    const router = useRouter();
    const text = i18n[router.locale];
    return (
        <div className="bg-white flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 bg-primarylight flex flex-col justify-center items-center pt-32 pb-12">
                <Image src={logo} width={50} height={50} alt="logo" />
                <h1 className="text-5xl text-white">{text.contTtl}</h1>
                <p className="text-xl text-white">{text.contSub}</p>
            </div>
            <div className="w-full lg:w-2/3 lg:h-full bg-white px-4 md:px-40 py-8 lg:pt-20 lg:pb-32">
                <label htmlFor="nombre">{text.contNm}</label>
                <input
                    name="nombre"
                    type="text" 
                    className="mb-4 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="apellidos">{text.contApe}</label>
                <input
                    name="apellidos" 
                    type="text" 
                    className="mb-4 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="email">{text.contEma}</label>
                <input
                    name="email" 
                    type="email" 
                    className="mb-4 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="telefono">{text.contTel}</label>
                <input
                    name="telefono" 
                    type="phone" 
                    className="mb-4 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="origen">{text.contPaOr}</label>
                <input
                    name="origen" 
                    type="text" 
                    className="mb-4 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="destino">{text.contPaDe}</label>
                <input
                    name="destino" 
                    type="text" 
                    className="mb-4 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <label htmlFor="mensaje">{text.contMsj}</label>
                <textarea
                    name="mensaje"
                    className="resize-none mb-4 bg-gray-100 border-b-2 border-primary px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto"
                />
                <div>
                    <input type="checkbox" id="terminos" name="terminos" />
                    <label htmlFor="terminos" className="text-gray-500"> {text.contTerm} <Link href="/terminos"><a className="underline">{text.contTerm2}</a></Link> {text.contTerm3} <Link href="/condiciones"><a className="underline">{text.contTerm4}</a></Link></label>
                </div>
                <button type="submit" className="bg-primary text-white rounded px-4 py-2 ml-auto mt-8 w-full md:w-auto md:mx-auto">{text.contBtn}</button>
            </div>
        </div>
    )
}