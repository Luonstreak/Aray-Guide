import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/images/logo.png'
import { useRouter } from 'next/router'
import i18n from '../util/i18n.json'

export default function Cookies(){
    const router = useRouter();
    const locale = router.locale;
    const text = i18n[locale];

    const cookies = [
        {
            name: "_cfduid (notin.es)",
            duration: text.cookies[1],
            description: text.cookies[2],
        },
        {
            name: "_ga (Google)",
            duration: text.cookies[3],
            description: text.cookies[4],
        },
        {
            name: "_gali (Google)",
            duration: text.cookies[5],
            description: text.cookies[6],
        },
        {
            name: "_gat (Google)",
            duration: text.cookies[7],
            description: text.cookies[8],
        },
        {
            name: "_gid (Google)",
            duration: text.cookies[9],
            description: text.cookies[10],
        },
        {
            name: "_unam (SHARETHIS)",
            duration: text.cookies[11],
            description: text.cookies[12],
        },
        {
            name: "Facebook",
            duration: text.cookies[13],
            description: text.cookies[14],
        },
        {
            name: "personalization_id(twitter.com)",
            duration: text.cookies[15],
            description: text.cookies[16],
        },
        {
            name: "WordPress",
            duration: text.cookies[17],
            description: text.cookies[18],
        }
    ];


    return (
        <div className="container max-w-screen-lg mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center pt-24 mb-16">
                <div>
                    <h1 className="capitalize text-3xl mb-2">{text.cooTtl}</h1>
                    <p className="capitalize mb-2">{text.cooSub}</p>
                    <hr className="title-separator" />
                </div>
                <Image src={logo} alt="logo" width={50} height={50} />
            </div>

            <h2 className="text-3xl mt-8 mb-4 text-gray-700 capitalize">{text.cooSec1Ttl}</h2>
            <p className="text-lg text-gray-500 mb-4">{text.cooSec1Body}</p>
            <p className="text-lg text-gray-500 mb-4">{text.cooSec1Body2}</p>
            
            <h2 className="text-3xl mt-8 mb-4 text-gray-700 capitalize">{text.cooSec2Ttl}</h2>
            <p className="text-lg text-gray-500 mb-4">{text.cooSec2Body}</p>
            <p className="text-lg text-gray-500 mb-4">{text.cooSec2Body2}</p>
        
            <h2 className="text-3xl mt-8 mb-4 capitalize text-center">{text.cooSec3Ttl}</h2>
            <h3 className="text-2xl mt-8 mb-4 text-gray-700 capitalize">{text.cooSec3Sub}</h3>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub2}</strong> {text.cooSec3Body}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub3}</strong> {text.cooSec3Body2}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub4}</strong> {text.cooSec3Bod3}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub5}</strong> {text.cooSec3Body4}</p>
            <h3 className="text-2xl mt-8 mb-4 text-gray-700 capitalize">{text.cooSec3Sub6}</h3>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub7}</strong> {text.cooSec3Body5}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub8}</strong> {text.cooSec3Body6}</p>
            <h3 className="text-2xl mt-8 mb-4 text-gray-700 capitalize">{text.cooSec3Sub9}</h3>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub10}</strong> {text.coolSec3Body7}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub11}</strong> {text.coolSec3Body8}</p>
            <h2 className="text-3xl mt-8 mb-4 capitalize text-center">{text.cooSec3Sub12}</h2>
            <p className="text-lg text-gray-500 mb-4"><strong>ARA Y ASOCIADOS SVA, S.L.</strong>{text.coolSec3Body9}<strong>{text.coolSec3Body10}</strong> {text.coolSec3Body11}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub13}</strong> {text.coolSec3Body12}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub14}</strong> {text.coolSec3Body13}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub15}</strong> {text.coolSec3Body14}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub16}</strong> {text.coolSec3Body15}</p>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub17}</strong> </p>
            <ul className="list-disc pl-8 mb-4 text-gray-500 text-lg">
                <li>{text.cooSec3Body16}</li>
                <li>{text.cooSec3Body17}</li>
                <li>{text.cooSec3Body18}</li>
            </ul>
            <p className="text-lg text-gray-500 mb-4"><strong>{text.cooSec3Sub19}</strong></p>
            <address>
                <h1>ARA Y ASOCIADOS SVA, S.L.</h1>
                <p className="text-lg text-gray-500 mb-4">Paseo de la Esplanada de España, 2</p>
                <p className="text-lg text-gray-500 mb-4">03002 Alicante, España</p>
                <a href="mailto:Email: info@arayasociados.com.">info@arayasociados.com</a>
            </address>
            <h3 className="text-2xl mt-8 mb-4 text-gray-700 capitalize">{text.cooSec3Sub20}</h3>
            <p className="text-lg text-gray-500 mb-4">{text.coolSec3Body19}</p>
            <p className="text-lg text-gray-500 mb-4">{text.coolSec3Body20}</p>
            <table className="table-auto list-disc pl-8 mb-4 text-gray-500 text-lg border border-primary">
                <thead className="bg-primary text-white text-left">
                    <tr>
                        <th className="border border-primary px-4 py-2">&nbsp;{text.tableHeader}</th>
                        <th className="border border-primary px-4 py-2">{text.tableHeader2}</th>
                        <th className="border border-primary px-4 py-2">{text.tableHeader3}</th>
                    </tr>
                </thead>
                <tbody>
                    {cookies.map(cookie => (
                        <tr key={cookie.name}>
                            <td className="border border-primary px-4 py-2">{cookie.name}</td>
                            <td className="border border-primary px-4 py-2">{cookie.duration}</td>
                            <td className="border border-primary px-4 py-2">{cookie.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr className="content-separator my-20" />
                
            {/* TODO: build specific subpages named below */}
            {/* <p className="text-lg text-gray-500 mb-4">si desea mas informacion sobre los tipos de cookies de seguimiento y analisis de datos de Google <a href="https://www.aray.guide/politica-de-cookies/#" target="_blank" rel="noreferrer">haga click aqui</a></p>
            <p className="text-lg text-gray-500 mb-4">para informarce como borrar las cookies de su explorador:</p>
            <ul>
                <li><Link href="#"><a clasName="underline">Firefox</a></Link></li>
                <li><Link href="#"><a clasName="underline">Chrome</a></Link></li>
                <li><Link href="#"><a clasName="underline">Internet Explorer</a></Link></li>
                <li><Link href="#"><a clasName="underline">Safari</a></Link></li>
                <li><Link href="#"><a clasName="underline">Opera</a></Link></li>
            </ul> */}
        </div>
    );
}