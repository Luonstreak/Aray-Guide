import Image from 'next/image'
import logo from '/public/images/logo-white.svg'

export default function Sobre(){
    return (
        <div className="bg-white">
            <div className="bg-primary flex flex-col justify-center items-center py-40">
                <Image src={logo} width={50} height={50} alt="logo" />
                <h1 className="text-white text-4xl font-bold mt-2 uppercase">Sobre la guia</h1>
                <p className="text-white text-sm uppercase">Descrubre lo que necesitas saber</p>
            </div>
            <div className="container mx-auto bg-white">
                <div className="pt-20 pb-10 px-4 w-full lg:w-1/2 mx-auto">
                    <h2 className="text-4xl font-bold">Que es la guia aray?</h2>
                    <hr className="title-separator" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <hr className="container-separator" />
                <div className="pb-10 px-4 w-full lg:w-1/2 mx-auto">
                    <h2 className="text-4xl font-bold">Nuestro Objetivo</h2>
                    <hr className="title-separator" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <hr className="container-separator" />
                <div className="pb-10 px-4 w-full lg:w-1/2 mx-auto">
                    <h2 className="text-4xl font-bold">Como te puede ayudar esta guia?</h2>
                    <hr className="title-separator" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <hr className="container-separator" />
            </div>
        </div>
    )
}