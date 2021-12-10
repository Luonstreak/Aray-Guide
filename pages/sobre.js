import Image from 'next/image'
import logo from '/public/images/logo-white.svg'
import i18n from '../util/i18n.json'
import { useRouter } from 'next/router'

export default function Sobre(){
    const router = useRouter();
    const text = i18n[router.locale];

    return (
        <div className="bg-white">
            <div className="bg-primary flex flex-col justify-center items-center py-40">
                <Image src={logo} width={50} height={50} alt="logo" />
                <h1 className="text-white text-4xl font-bold mt-2 uppercase">{text.sobSb}</h1>
                <p className="text-white text-sm uppercase">{text.sobSobSub}</p>
            </div>
            <div className="container max-w-screen-lg mx-auto bg-white">
                <div className="pt-20 pb-10 px-4 w-full lg:w-2/3 mx-auto">
                    <h2 className="text-4xl font-bold">{text.sobQue}</h2>
                    <hr className="title-separator mb-8" />
                    <p className="text-lg text-gray-500 mb-4">{text.sobQue2}</p>
                    <p className="text-lg text-gray-500 mb-4">{text.sobQue3}</p>
                    <p className="text-lg text-gray-500 mb-4">{text.sobQue4}</p>
                    <p className="text-lg text-gray-500"><strong>{text.sobQue5}</strong>{text.sobQue6}</p>
                </div>
                <hr className="container-separator" />
                
                <div className="pb-10 px-4 w-full lg:w-2/3 mx-auto">
                    <h2 className="text-4xl font-bold">{text.sobProp}</h2>
                    <hr className="title-separator mb-8" />
                    <p className="text-lg text-gray-500 mb-4">{text.sobProp2}<strong>{text.sobProp3}</strong>{text.sobProp4}</p>
                    <p className="text-lg text-gray-500">{text.sobProp5}<strong>{text.sobProp6}</strong>{text.sobProp7}</p>
                </div>
                <hr className="container-separator" />
                
                <div className="pb-10 px-4 w-full lg:w-2/3 mx-auto">
                    <h2 className="text-4xl font-bold">{text.sobCrit}</h2>
                    <hr className="title-separator mb-8" />
                    <p className="text-lg text-gray-500 mb-4">{text.sobCrit2}<strong>{text.sobCrit3}</strong>{text.sobCrit4}</p>
                    <p className="text-lg text-gray-500 mb-4">{text.sobCrit37}</p>
                    <ul className="list-disc pl-8 text-lg mb-4">
                        <li>{text.sobCrit5}</li>
                        <li>{text.sobCrit6}</li>
                        <li>{text.sobCrit7}</li>
                        <li>{text.sobCrit8}</li>
                        <li>{text.sobCrit9}</li>
                        <li>{text.sobCrit10}</li>
                    </ul>
                    <p className="text-lg text-gray-500 mb-4">{text.sobCrit11}</p>
                    <ul className="list-disc pl-8 text-lg mb-4">
                        <li>{text.sobCrit12}</li>
                        <li>{text.sobCrit13}</li>
                        <li>{text.sobCrit14}</li>
                        <li>{text.sobCrit15}</li>
                    </ul>
                    <p className="text-lg text-gray-500 mb-4">{text.sobCrit16}</p>
                    <p className="text-lg text-gray-500 mb-4">{text.sobCrit17}<strong>{text.sobCrit18}</strong></p>
                    <p className="text-lg text-gray-500 mb-4">{text.sobCrit19}</p>
                    <ul className="list-disc pl-8 text-lg mb-4">
                        <li>
                            <strong>{text.sobCrit20}</strong>
                            <ul className="list-disc pl-8 text-lg font-light mb-2">
                                <li>{text.sobCrit21}</li>
                                <li>{text.sobCrit22}</li>
                                <li>{text.sobCrit23}</li>
                                <li>{text.sobCrit24}</li>
                                <li>{text.sobCrit25}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{text.sobCrit26}</strong>
                            <ul className="list-disc pl-8 text-lg font-light mb-2">
                                <li>{text.sobCrit27}</li>
                                <li>{text.sobCrit28}</li>
                                <li>{text.sobCrit29}</li>
                                <li>{text.sobCrit30}</li>
                                <li>{text.sobCrit31}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{text.sobCrit32}</strong>
                            <ul className="list-disc pl-8 text-lg font-light mb-2">
                                <li>{text.sobCrit33}</li>
                                <li>{text.sobCrit34}</li>
                                <li>{text.sobCrit35}</li>
                                <li>{text.sobCrit36}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr className="container-separator" />
                
                <div className="pb-10 px-4 w-full lg:w-2/3 mx-auto">
                    <h2 className="text-4xl font-bold">{text.sobComo}</h2>
                    <hr className="title-separator mb-8" />
                        <p className="text-lg text-gray-500 mb-4">{text.sobComo2}</p>
                        <p className="text-lg text-gray-500 mb-4">{text.sobComo3}</p>
                        <p className="text-lg text-gray-500 mb-4">{text.sobComo4}</p>
                        <p className="text-lg text-gray-500 mb-4">{text.sobComo5}</p>
                        <p className="text-lg text-gray-500 mb-4">{text.sobComo6}</p>
                        <p className="text-lg text-gray-500">{text.sobComo7}</p>
                </div>
                <hr className="container-separator" />
            </div>
        </div>
    )
}