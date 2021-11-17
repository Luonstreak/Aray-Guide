import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/images/logo-white.svg'

export default function Subscribete(){
    return (
        <div className="bg-white flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-40 lg:h-screen bg-primary flex flex-col justify-center items-center">
                <div>
                    <div className="flex items-end">
                        <p className="text-white text-lg mr-2">Subscribete a la</p>
                        <Image src={logo} width={50} height={50} alt="logo" />
                    </div>
                    <h1 className="text-white text-5xl font-bold capitalize">newsletter</h1>
                    <p className="text-white text-lg text-right">de la guia aray</p>
                </div>
            </div>
            <div className="w-full lg:w-2/3 lg:h-screen bg-white shadow-lg px-4 md:px-40 pt-24">
                <h2 className="text-4xl font-bold">Rellena tus datos</h2>
                <p className="mb-10">para recibir nuestra newsletter</p>
                <input
                    placeholder="Nombre"
                    name="nombre" 
                    type="text" 
                    className="mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <input
                    placeholder="Apellidos"
                    name="apellidos" 
                    type="text" 
                    className="mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <input
                    placeholder="Fecha de nacimiento"
                    name="fdn" 
                    type="date" 
                    className="mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <input
                    placeholder="Correo Electronico"
                    name="email" 
                    type="email" 
                    className="mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <div>
                    <input type="checkbox" id="terminos" name="terminos" />
                    <label htmlFor="terminos" className="text-gray-500">&nbsp;He leido y acepto los <Link href="/terminos"><a className="underline">terminos</a></Link> y <Link href="/condiciones"><a className="underline">condiciones</a></Link></label>
                </div>
                <button type="submit" className="bg-yellow-500 text-white rounded px-4 py-2 ml-auto mt-8 w-full md:w-auto md:mx-auto">Subscribirme</button>
            </div>
        </div>
    )
}