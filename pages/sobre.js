import Image from 'next/image'
import logo from '/public/images/logo.png'

export default function Sobre(){
    return (
        <div className="bg-purple-100">
            <div className="bg-organge-100 flex flex-col justify-center items-center py-40">
                <Image src={logo} width={50} height={50} alt="logo"/>
                <h1>Sobre la guia</h1>
                <p>Descrubre lo que necesitas saber</p>
            </div>
            <div className="container mx-auto bg-white">
                <div className="pt-20 pb-10 px-4 w-full lg:w-1/2 mx-auto">
                    <h2>Que es la guia aray?</h2>
                    <hr className="w-16 h-1 border-2 border-yellow-500 my-4" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <hr className="w-10/12 md:w-1/2 mx-auto mt-8" />
                </div>
                
                <div className="pb-10 px-4 w-full lg:w-1/2 mx-auto">
                    <h2>Nuestro Objetivo</h2>
                    <hr className="w-16 h-1 border-2 border-yellow-500 my-4" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <hr className="w-10/12 md:w-1/2 mx-auto mt-8" />
                </div>
                
                <div className="pb-10 px-4 w-full lg:w-1/2 mx-auto">
                    <h2>Como te puede ayudar esta guia?</h2>
                    <hr className="w-16 h-1 border-2 border-yellow-500 my-4" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <hr className="w-10/12 md:w-1/2 mx-auto mt-8" />
                </div>
            </div>
        </div>
    )
}