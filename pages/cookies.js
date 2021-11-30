import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/images/logo.png'
export default function Cookies(){

    const cookies = [
        {
            name: "_cfduid (notin.es)",
            duration: "Sesión",
            description: "Publicidad"
        },
        {
            name: "_ga (Google)",
            duration: "2 años",
            description: "Se usa para distinguir a los usuarios"
        },
        {
            name: "_gali (Google)",
            duration: "30s",
            description: "Atribución de enlace mejorada."
        },
        {
            name: "_gat (Google)",
            duration: "1 minuto",
            description: "Se usa para limitar el porcentaje de solicitudes. Si has implementado Google Analytics mediante Google Tag Manager, esta cookie se llamará _dc_gtm_."
        },
        {
            name: "_gid (Google)",
            duration: "24 horas",
            description: "Se usa para distinguir a los usuarios"
        },
        {
            name: "_unam (SHARETHIS)",
            duration: "Persistente",
            description: "Su finalidad es cuantificar el número de Usuarios que comparten un determinado contenido y cuántas páginas web son visitadas a raíz de esa acción"
        },
        {
            name: "Facebook",
            duration: "Publicidad, estadísticas y mediciones",
            description: "Coloca Cookies en el ordenador o dispositivo y recibe la información Almacenada en ellas cuando utilizas o visitas servicios prestados por otras empresas que utilizan los servicios de Facebook."
        },
        {
            name: "personalization_id(twitter.com)",
            duration: "Sesión",
            description: "Twitter"
        },
        {
            name: "WordPress",
            duration: "2 años",
            description: "Utilizado para el correcto funcionamiento del gestor de contenido WordPress"
        }
    ];


    return (
        <div className="container max-w-screen-lg mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center pt-24 mb-16">
                <div>
                    <h1 className="capitalize text-3xl mb-2">politica de cookies</h1>
                    <p className="capitalize mb-2">aray te informa sobre tus datos de navegacion</p>
                    <hr className="title-separator" />
                </div>
                <Image src={logo} alt="logo" width={50} height={50} />
            </div>

            <h2 className="text-3xl mt-8 mb-4 text-gray-700 capitalize">información sobre cookies</h2>
            <p className="text-lg text-gray-500 mb-4">Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles, son herramientas empleadas por los servidores Web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio. </p>
            <p className="text-lg text-gray-500 mb-4">Mediante el uso de estos dispositivos se permite al servidor Web recordar algunos datos concernientes al usuario, como sus preferencias para la visualización de las páginas de ese servidor, nombre y contraseña, productos que más le interesan, etc. </p>
            
            <h2 className="text-3xl mt-8 mb-4 text-gray-700 capitalize">cookies afectadas por la normativa y cookies exceptuadas</h2>
            <p className="text-lg text-gray-500 mb-4">Conforme a la «Ley de Servicios de la Sociedad de la Información» (LSSICE) establecida por el Real Decreto 13/2012, es de obligación obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies prescindibles, antes de que este navegue por ellas. </p>
            <p className="text-lg text-gray-500 mb-4">Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario. </p>
        
            <h2 className="text-3xl mt-8 mb-4 capitalize text-center">tipos de cookies</h2>
            <h3 className="text-2xl mt-8 mb-4 text-gray-700 capitalize">seúgn la finalidad:</h3>
            <p className="text-lg text-gray-500 mb-4"><strong>Cookies técnicas y funcionales:</strong> son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan. </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Cookies analíticas:</strong> son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio. </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Cookies publicitarias:</strong> son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios. </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Cookies de publicidad comportamental:</strong> recogen información sobre las preferencias y elecciones personales del usuario (retargeting) para permitir la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. </p>
            <h3 className="text-2xl mt-8 mb-4 text-gray-700 capitalize">seúgn la propiedad:</h3>
            <p className="text-lg text-gray-500 mb-4"><strong>Cookies propias:</strong> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario. </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Cookies de terceros:</strong> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies. </p>
            <h3 className="text-2xl mt-8 mb-4 text-gray-700 capitalize">según el plazo de conservación:</h3>
            <p className="text-lg text-gray-500 mb-4"><strong>Cookies de sesión:</strong> son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Cookies persistentes:</strong> son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un período definido por el responsable de la cookie, y que puede ir de unos minutos a varios años. </p>
            <h2 className="text-3xl mt-8 mb-4 capitalize text-center">tratamiento de datos personales</h2>
            <p className="text-lg text-gray-500 mb-4"><strong>ARA Y ASOCIADOS SVA, S.L.</strong> es el <strong>responsable del tratamiento</strong> de los datos personales del Interesado y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018 de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, por lo que se le facilita la siguiente información del tratamiento: </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Fines del tratamiento:</strong> según se especifica en el apartado de cookies que se utilizan en este sitio web. </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Legitimación del tratamiento:</strong> por consentimiento del interesado (art. 6.1 a) RGPD). </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Criterios de conservación de los datos:</strong> según se especifica en el apartado de cookies utilizadas en la web. </p>
            <p className="text-lg text-gray-500 mb-4"><strong>Comunicación de los datos:</strong> no se comunicarán los datos a terceros, excepto en cookies propiedad de terceros o por obligación legal.</p>
            <p className="text-lg text-gray-500 mb-4"><strong>Derechos que asisten al Interesado:</strong></p>
            <ul className="list-disc pl-8 mb-4 text-gray-500 text-lg">
                <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos y a la limitación u oposición a su tratamiento.</li>
                <li>Derecho a presentar una reclamación ante la Autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
            </ul>
            <p className="text-lg text-gray-500 mb-4"><strong>Datos de contacto para ejercer sus derechos:</strong></p>
            <address>
                <h1>ARA Y ASOCIADOS SVA, S.L.</h1>
                <p className="text-lg text-gray-500 mb-4">Paseo de la Esplanada de España, 2</p>
                <p className="text-lg text-gray-500 mb-4">03002 Alicante, España</p>
                <a href="mailto:Email: info@arayasociados.com.">info@arayasociados.com</a>
            </address>
            <h3 className="text-2xl mt-8 mb-4 text-gray-700 capitalize">principales cookies utilizadas en este sito web:</h3>
            <p className="text-lg text-gray-500 mb-4">Esta página web utiliza cookies de terceros que son aquellas que se envían a tu ordenador o terminal desde un dominio o una página web que no es gestionada por nosotros, sino por otra entidad que trata los datos obtenidos a través de las cookies.</p>
            <p className="text-lg text-gray-500 mb-4">En este caso las Cookies son utilizadas con fines estadísticos relacionados con las visitas que recibe y las páginas que se consultan, quedando aceptado su uso al navegar por ella</p>
            <table className="table-auto list-disc pl-8 mb-4 text-gray-500 text-lg border border-primary">
                <thead className="bg-primary text-white text-left">
                    <tr>
                        <th className="border border-primary px-4 py-2">&nbsp;Cookie (y proveedor)</th>
                        <th className="border border-primary px-4 py-2">Duracion</th>
                        <th className="border border-primary px-4 py-2">Descripcion</th>
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