import condiciones from '/public/images/condiciones.jpg'
import Image from 'next/image'

export default function Condiciones(){
    return (
        <>
            {/* HERO */}
            <div className="w-screen flex flex-col justify-center items-center relative py-20 md:py-32 lg:py-60">
                <h1 className="z-10 text-white text-3xl lg:text-6xl uppercase mb-4">Política de Privacidad</h1>
                <div className="absolute inset-0 z-0">
                    <Image priority src={condiciones} layout="fill" className="object-cover" alt="hero image" />
                </div>
            </div>
            <div className="container max-w-screen-lg mx-auto px-16">
                <h2 className="text-4xl font-bold pt-16">Description</h2>
                <hr className="title-separator mb-8" />
                <ol className="list-decimal">
                    <li className="text-lg text-gray-500">
                        <span className="font-bold uppercase">- información al usuario</span>
                        <p className="text-lg text-gray-500 mb-4">La presente Política de Privacidad expresa el compromiso de <strong>ARA Y ASOCIADOS SVA, S.L.</strong> (en adelante, <strong>ARA Y ASOCIADOS</strong>) respecto a la privacidad y la protección de datos que tratamos, garantizando a los Usuarios, entre otras cosas, que (i) en cualquier momento, podrá ejercer cualquiera de los derechos que le corresponden de acuerdo con la normativa aplicable; (ii) cumpliremos con la obligación de secreto y de confidencialidad de los datos de carácter personal recopilados, y que no los comunicaremos a terceros sin su consentimiento; (iii) hemos adoptado las medidas técnicas y organizativas necesarias.</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿Quién es el responsable del tratamiento de tus datos personales?</strong></p>
                        <p className="text-lg text-gray-500 mb-4"><strong>ARA Y ASOCIADOS SVA, S.L.</strong> es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (en adelante, RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (en adelante LOPDGDD).</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿Como tratamos tus datos personales?</strong></p>
                        <p className="text-lg text-gray-500 mb-4">Estamos comprometidos con el correcto tratamiento de sus datos personales, por lo que siempre los trataremos:</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>De manera lícita, leal y transparente.</li>
                            <li>Con fines determinados, explícitos y legítimos.</li>
                            <li>Adecuados, pertinentes y limitado a lo necesario en relación a la finalidad.</li>
                            <li>Exactos y actualizados.</li>
                            <li>Durante el tiempo necesario para el cumplimiento de la finalidad por la que se recabaron.</li>
                            <li>De forma íntegra y confidencial.</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿Qué datos personales tratamos?</strong></p>
                        <p className="text-lg text-gray-500 mb-4">Estamos comprometidos con el correcto tratamiento de sus datos personales, por lo que siempre los trataremos:</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>Datos identificativos: datos básicos que permiten identificar y contactar con el Usuario, como su nombre y apellidos, teléfono, correo electrónico o dirección.</li>
                            <li>Mensajes: campo de texto libre en el que el Usuario puede formular las consultas que considere oportuno.</li>
                            <li>Datos de conexión y cookies: información relativa a la conexión del Sitio Web, como cookies o dirección IP. Para ampliar información sobre las cookies, consulte nuestra Política de cookies.</li>
                            <li>Reseñas: La web ofrece la posibilidad de realizar reseñas o comentarios sobre los colegios y centros docentes que se muestran. Los datos que podremos solicitar será el nombre completo, la dirección de correo u otros datos personales necesarios para la finalidad, que será recabar información u opiniones sobre los colegios ofertados, así como mejorar los productos, servicios y la experiencia del usuario y con fines estadísticos. También se incluye encuestas o sondeos opcionales, que podrán ser o no anónimas con fines estadísticos, siendo el interés legítimo la base jurídica.</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿Cuál es el origen de los datos?</strong></p>
                        <p className="text-lg text-gray-500 mb-4">Sus datos personales nos los ha proporcionado usted directamente a través de alguno de los formularios o canales de comunicación habilitados para ello. En cada formulario, o en el canal correspondiente, los datos personales solicitados son los necesarios e imprescindibles para llevar a cabo la finalidad para la que se recabaron, que la encontrará indicada en la primera capa informativa.</p>
                        <p className="text-lg text-gray-500 mb-4">Es muy importante que todos los datos que nos proporcionen sean correctos, completos, exactos y actualizados, para que podamos realizar, gestionar o procesar correctamente su solicitud.</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿Para qué tratamos tus datos personales?</strong></p>
                        <p className="text-lg text-gray-500 mb-4">Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>Comunicarnos con Usted para responder las solicitudes realizadas.</li>
                            <li>Envío de comunicaciones informativas, de promociones o de cortesía.</li>
                            <li>Atender y ejecutar las relaciones profesionales que se puedan generar entre las Partes.</li>
                            <li>Mejorar nuestros productos y servicios identificando tendencias de uso, de procedencia o de especialidad, entre otros criterios.</li>
                            <li>Administrar nuestros perfiles oficiales en redes sociales, realizando un tratamiento de datos personales únicamente para atender las interacciones que puedan existir en cada red social.</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿Por qué motivo podemos tratar tus datos personales?</strong></p>
                        <p className="text-lg text-gray-500 mb-4">Porque el tratamiento está legitimado por el artículo 6 del RGPD de la siguiente forma:</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>Con su CONSENTIMIENTO, como el existente en los diferentes formularios del Sitio Web.</li>
                            <li>En algunos casos, por interés legítimo del RESPONSABLE, como puede ser estudios de tendencias o comunicaciones comerciales.</li>
                            <li>Para la ejecución de un contrato o relación precontractual entre el Usuario y el RESPONSABLE.</li>
                            <li>En cumplimiento de nuestras obligaciones legales.</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿Durante cuánto tiempo guardaremos tus datos personales?</strong></p>
                        <p className="text-lg text-gray-500 mb-4">Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿A quién facilitamos tus datos personales?</strong></p>
                        <p className="text-lg text-gray-500 mb-4">No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.</p>
                        <p className="text-lg text-gray-500 mb-4"><strong>¿Cuáles son tus derechos?</strong></p>
                        <p className="text-lg text-gray-500 mb-4">Podrá ejercer, de forma gratuita y en la medida que se cumplan las exigencias legales, los siguientes derechos:</p>
                        <ul className="mt-2 list-disc pl-8 mb-4">
                            <li>Derecho de acceso: Tiene derecho a obtener información sobre los datos personales que le conciernen que estamos tratando o no, y en tal caso, acceder a ellos. En caso de solicitarlo, le facilitaremos una copia de los datos personales que estemos tratando.</li>
                            <li>Derecho de rectificación: Tiene derecho a rectificar sus datos personales que sean o inexactos, o a que se completen aquellos datos que sean incompletos.</li>
                            <li>Derecho de supresión: Podrá solicitar la supresión de sus datos cuando, entre otras circunstancias, éstos ya no sean necesarios para los fines que fueron recabados o tratados de otro modo.</li>
                            <li>Derecho a la limitación del tratamiento: Tiene derecho a que se limite el tratamiento de sus datos, en determinadas circunstancias que establece la normativa de protección de datos.</li>
                            <li>Derecho a la portabilidad de los datos: Tiene derecho a recibir tus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otra entidad.</li>
                            <li>Derecho de oposición: En determinadas situaciones, podrá oponerse a un determinado tratamiento por motivos relacionados con su situación particular, incluida la elaboración de perfiles. En todo momento podrá oponerse al tratamiento de sus datos personales con fines de mercadotecnia directa.</li>
                            <li>Derecho a revocar su consentimiento: En todo momento, podrá retirar el consentimiento que nos haya prestado para cualquier tratamiento, aunque dicha retirada no afectará a la licitud del tratamiento basado en el consentimiento que se prestó previamente.</li>
                            <li>Derecho a presentar una reclamación ante la autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
                        </ul>
                        <p className="text-lg text-gray-500 mb-4"><strong>Datos de contacto para ejercer sus derechos:</strong></p>
                        <address className="mb-4">
                            <h1>ARA Y ASOCIADOS SVA, S.L.</h1>
                            <p className="text-lg text-gray-500">Paseo de la Esplanada de España, 2</p>
                            <p className="text-lg text-gray-500">03002 Alicante, España</p>
                            <a href="mailto:Email: rgpd@arayasociados.com">rgpd@arayasociados.com</a>
                        </address>
                    </li>
                    <li className="text-lg text-gray-500">
                        <span className="font-bold uppercase">- carácter obligatorio o facultativo de la información facilitada por el usuario</span>
                        <p className="text-lg text-gray-500 mb-4">Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.</p>
                        <p className="text-lg text-gray-500 mb-4">El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.</p>
                    </li>
                    <li className="text-lg text-gray-500">
                        <span className="font-bold uppercase">- medidas de seguridad</span>
                        <p className="text-lg text-gray-500 mb-4">Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas RGPD y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del RGPD, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.</p>
                        <p className="text-lg text-gray-500 mb-4">El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el RGPD y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos. Para más información sobre las garantías de privacidad, puedes dirigirte al RESPONSABLE <strong>ARA Y ASOCIADOS SVA, S.L.</strong> a través del Email: rgpd@arayasociados.com o a través de documento remitido a Paseo de la Explanada de España, 2, Ppal. Dcha., 03002 Alicante (España).</p>
                    </li>
                </ol>
                <p className="text-lg text-gray-500 text-center my-8"><strong>Última actualización:</strong> SEPTIEMBRE 2021</p>
                <hr className="container-separator" />
            </div>
        </>
    )
}