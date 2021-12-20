import Image  from 'next/image'
import Link  from 'next/link'
import logo from '/public/images/logo-white.svg'
import { useRouter } from 'next/router'
import i18n from '../util/i18n.json'

export default function Footer(props){
    const router = useRouter();
    const locale = router.locale;
    const text = i18n[locale];

    return (
        <div className="bg-primary flex flex-col justify-center text-white px-4 py-8"> 
            <div className="w-full mb-8 flex justify-center items-center">
                <p className="text-white capitalize font-bold text-right pr-2">{text.ftr1}</p>
                <Image src={logo} width={50} height={50} alt="logo" />
                <p className="text-white capitalize font-bold text-left pl-2">{text.ftr2}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                <Link href="/condiciones"><a className="text-white capitalize">{text.ftr3}</a></Link>
                <Link href="/cookies"><a className="text-white capitalize">{text.ftr4}</a></Link>
                <Link href="/privacidad"><a className="text-white capitalize">{text.ftr5}</a></Link>
            </div>
        </div>
    )
}