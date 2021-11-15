import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo.png';

export default function Navbar(props){
    return(
        <div className="fixed z-30 bg-gray-700 bg-opacity-50 w-screen">
            <div className="container mx-auto flex flex-row justify-between p-2 text-gray-100">
                <button className="mr-2">
                    <Link href="/">
                        <a><Image src={logo} width={50} height={50} alt="logo" /></a>
                    </Link>
                </button>
                <div className="flex align-item-center flex-nowrap overflow-x-scroll whitespace-nowrap">
                    <button className="px-4 py-2 mr-2"><Link href="/colegios"><a>Colegios</a></Link></button>
                    <button className="px-4 py-2 mr-2"><Link href="/sobre"><a>Sobre la guia</a></Link></button>
                    <button className="px-4 py-2"><Link href="/contacto"><a>Contacto</a></Link></button>
                </div>
            </div>
        </div>
    )
}