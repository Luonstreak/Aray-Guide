import Image  from 'next/image'
import Link  from 'next/link'
import logo from '/public/images/logo-white.svg'

export default function Footer(props){
    return (
        <div className="bg-primary flex flex-col justify-center text-white px-4 py-8"> 
            <div className="w-full mb-8 flex justify-center items-center">
                <p className="text-white capitalize font-bold text-right pr-2">guia</p>
                <Image src={logo} width={50} height={50} alt="logo" />
                <p className="text-white capitalize font-bold text-left pl-2">aray</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                <Link href="/condiciones"><a className="text-white capitalize">aviso legal y condiciones de uso</a></Link>
                <Link href="/cookies"><a className="text-white capitalize">cookies</a></Link>
                <Link href="/privacidad"><a className="text-white capitalize">politica de privacidad</a></Link>
            </div>
        </div>
    )
}