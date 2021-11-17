import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/images/logo-white.svg'

export default function Contacto(){

    return (
        <div className="bg-white flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 lg:h-screen bg-primary flex flex-col justify-center items-center pt-32 pb-12">
                <Image src={logo} width={50} height={50} alt="logo" />
                <h1 className="text-5xl text-white">Contacta</h1>
                <p className="text-xl text-white">con nosotros</p>
            </div>
            <div className="w-full lg:w-2/3 lg:h-screen bg-white px-4 md:px-40 py-12 lg:py-24 shadow-lg">
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
                    placeholder="Correo Electronico"
                    name="email" 
                    type="email" 
                    className="mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <input
                    placeholder="Telefono"
                    name="telefono" 
                    type="phone" 
                    className="mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <input
                    placeholder="Pais de origen"
                    name="origen" 
                    type="text" 
                    className="mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <input
                    placeholder="Pais de destino"
                    name="destino" 
                    type="text" 
                    className="mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                    />
                <textarea
                    placeholder="Escribe tu mensaje"
                    className="resize-none mb-8 bg-gray-100 border-b-2 border-yellow-500 px-4 py-2 w-full outline-none focus:border-yellow-700  lg:w-40m mx-auto" 
                />
                <div>
                    <input type="checkbox" id="terminos" name="terminos" />
                    <label htmlFor="terminos" className="text-gray-500">&nbsp;He leido y acepto los <Link href="/terminos"><a className="underline">terminos</a></Link> y <Link href="/condiciones"><a className="underline">condiciones</a></Link></label>
                </div>
                <button type="submit" className="bg-yellow-500 text-white rounded px-4 py-2 ml-auto mt-8 w-full md:w-auto md:mx-auto">Enviar mensaje</button>
            </div>
        </div>
    )
}