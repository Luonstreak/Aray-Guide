import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo-white.svg';
import close from '/public/images/icons/close.svg';
import burger from '/public/images/icons/burger.svg';
import { useState } from 'react'
import { useRouter } from 'next/router'
import i18n from '../util/i18n.json'

export default function Navbar(){

    const [open, setOpen] =  useState(false);
    const router = useRouter();
    const { locale } = router;

    return(
        <div className="fixed z-30 bg-black bg-opacity-40 w-screen">
            <div className="container mx-auto flex flex-row justify-between px-4 md:px-0">
                <Link href="/">
                    <button className="py-2"><Image src={logo} width={50} height={50} alt="logo" /></button>
                </Link>
                <div className="hidden md:block">
                    <Link href="/buscar"><button className="p-4 h-full bg-black bg-opacity-0 hover:bg-opacity-20 text-gray-50 md:text-xl">{i18n[locale].navCol}</button></Link>
                    <Link href="/sobre"><button className="p-4 h-full bg-black bg-opacity-0 hover:bg-opacity-20 text-gray-50 md:text-xl">{i18n[locale].navSob}</button></Link>
                    <Link href="/contacto"><button className="p-4 h-full bg-black bg-opacity-0 hover:bg-opacity-20 text-gray-50 md:text-xl">{i18n[locale].navCont}</button></Link>
                    {/* <select defaultValue={locale}>
                        <option value="es-ES">{i18n[locale].navEs}</option>
                        <option value="en-EN">{i18n[locale].navEn}</option>
                        <option value="zh-Cn">{i18n[locale].navCn}</option>
                        <option value="fr-FR">{i18n[locale].navFr}</option>
                    </select> */}
                </div>
                {/* mobile hamburger menu */}
                <button className="md:hidden" onClick={() => setOpen(true)}><Image src={burger} width={25} height={25} alt="menu icon" /></button>
                <div className={`absolute md:hidden w-screen h-screen top-0 bg-primary flex flex-col ${open ? 'left-0' : 'left-full'}`}>
                    <div className="text-right">
                        <button className="p-4 text-lg" onClick={() => setOpen(false)}><Image src={close} width={25} height={25} alt="close menu icon" /></button>
                    </div>
                    <Link href="/buscar"><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setOpen(false)}>Colegios</a></Link>
                    <Link href="/sobre"><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setOpen(false)}>Sobre la guia</a></Link>
                    <Link href="/contacto"><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setOpen(false)}>Contacto</a></Link>
                </div>
            </div>
        </div>
    )
}