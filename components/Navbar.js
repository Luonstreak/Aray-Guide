import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo-white.svg';
import close from '/public/images/icons/close-white.svg';
import burger from '/public/images/icons/burger.svg';
import lang from '/public/images/icons/lang.svg';
import { useState } from 'react'
import { useRouter } from 'next/router'
import i18n from '../util/i18n.json'

export default function Navbar(){

    const [navMenuOpen, setNavMenuOpen] =  useState(false);
    const [lanMenuOpen, setLanMenuOpen] =  useState(false);
    const router = useRouter();
    const { locale, pathname } = router;
    return(
        <div className="fixed z-30 bg-black bg-opacity-40 w-screen">
            <div className="container mx-auto flex flex-row px-4 md:px-0">
                <Link href="/" passHref>
                    <button className="py-2"><Image src={logo} width={50} height={50} alt="logo" /></button>
                </Link>
                <div className="hidden md:block ml-auto">
                    <Link href="/buscar" passHref><button className="p-4 h-full bg-black bg-opacity-0 hover:bg-opacity-20 text-gray-50 md:text-xl">{i18n[locale].navCol}</button></Link>
                    <Link href="/sobre" passHref><button className="p-4 h-full bg-black bg-opacity-0 hover:bg-opacity-20 text-gray-50 md:text-xl">{i18n[locale].navSob}</button></Link>
                    <Link href="/contacto" passHref><button className="p-4 h-full bg-black bg-opacity-0 hover:bg-opacity-20 text-gray-50 md:text-xl">{i18n[locale].navCont}</button></Link>
                </div>
                {/* lang menu */}
                <button className="ml-auto md:ml-0 mr-4 md:mr-0 md:px-8 bg-black bg-opacity-0 md:hover:bg-opacity-20" onClick={() => setLanMenuOpen(true)}><Image src={lang} width={25} height={25} alt="menu icon" /></button>
                <div className={`absolute w-screen z-50 h-screen top-0 bg-yellow-700 flex flex-col ${lanMenuOpen ? 'left-0' : 'left-full'}`}>
                    <div className="text-right">
                        <button className="p-4 text-lg" onClick={() => setLanMenuOpen(false)}><Image src={close} width={25} height={25} alt="close menu icon" /></button>
                    </div>
                    <Link href={pathname} passHref locale="es-ES"><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setLanMenuOpen(false)}>{i18n[locale].navEs} - Español</a></Link>
                    <Link href={pathname} passHref locale="en-US"><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setLanMenuOpen(false)}>{i18n[locale].navEn} - English</a></Link>
                    <Link href={pathname} passHref locale="zh-CN"><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setLanMenuOpen(false)}>{i18n[locale].navCn} - 简体中文</a></Link>
                    <Link href={pathname} passHref locale="fr-FR"><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setLanMenuOpen(false)}>{i18n[locale].navFr} - Français</a></Link>
                </div>
                {/* mobile nav menu */}
                <button className="md:hidden" onClick={() => setNavMenuOpen(true)}><Image src={burger} width={25} height={25} alt="menu icon" /></button>
                <div className={`absolute md:hidden z-50 w-screen h-screen top-0 bg-primary flex flex-col ${navMenuOpen ? 'left-0' : 'left-full'}`}>
                    <div className="text-right">
                        <button className="p-4 text-lg" onClick={() => setNavMenuOpen(false)}><Image src={close} width={25} height={25} alt="close menu icon" /></button>
                    </div>
                    <Link href="/buscar" passHref><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setNavMenuOpen(false)}>{i18n[locale].navCol}</a></Link>
                    <Link href="/sobre" passHref><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setNavMenuOpen(false)}>{i18n[locale].navSob}</a></Link>
                    <Link href="/contacto" passHref><a className="py-4 text-2xl text-center md:text-xl text-white" onClick={() => setNavMenuOpen(false)}>{i18n[locale].navCont}</a></Link>
                </div>
            </div>
        </div>
    )
}