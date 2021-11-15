import Image  from 'next/image'
import Link  from 'next/link'
import logo from '/public/images/logo.png'

export default function Footer(props){
    return (
        <div className="bg-yellow-600 flex flex-col justify-center text-white px-4 py-8"> 
            <div className="w-full mb-8 flex justify-center items-center">
                <p className="text-right pr-2">guia</p>
                <Image src={logo} width={50} height={50} alt="logo" /> 
                <p className="text-left pl-2">aray</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
                <Link href="/condiciones"><a className="underline">condiciones de uso</a></Link>
                <Link href="/cookies"><a className="underline">cookies</a></Link>
                <Link href="/privacidad"><a className="underline">politica de privacidad</a></Link>
                <Link href="/legal"><a className="underline">aviso legal</a></Link>
            </div>
        </div>
    )
}