import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo-white.svg';

export default function Navbar(props){
    return(
        <div className="fixed z-30 bg-black bg-opacity-40 w-screen">
            <div className="container mx-auto flex flex-row justify-between p-2 text-gray-100">
                <button className="mr-2 w-14">
                    <Link href="/">
                        <a><Image src={logo} layout="responsive" width={50} height={50} alt="logo" /></a>
                    </Link>
                </button>
                <div className="flex align-item-center flex-nowrap overflow-x-scroll whitespace-nowrap">
                    <button className="bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg px-4 py-2 mr-2"><Link href="/colegios"><a className="text-white md:text-xl">Colegios</a></Link></button>
                    <button className="bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg px-4 py-2 mr-2"><Link href="/sobre"><a className="text-white md:text-xl">Sobre la guia</a></Link></button>
                    <button className="bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg px-4 py-2"><Link href="/contacto"><a className="text-white md:text-xl">Contacto</a></Link></button>
                </div>
            </div>
        </div>
    )
}