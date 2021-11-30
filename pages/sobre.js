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
            <div className="container max-w-screen-lg mx-auto bg-white">
                <div className="pt-20 pb-10 px-4 w-full lg:w-2/3 mx-auto">
                    <h2 className="text-4xl font-bold">Que es la guia aray?</h2>
                    <hr className="title-separator mb-8" />
                    <p className="text-lg text-gray-500 mb-4">Darles una educación de calidad a nuestros hijos es lo más importante que podemos ofrecerles como padres.</p>
                    <p className="text-lg text-gray-500 mb-4">¿Pero cómo elegir el colegio adecuado?</p>
                    <p className="text-lg text-gray-500 mb-4">¿Cómo estar seguros de que estamos dejando en manos de las personas correctas el porvenir de nuestros hijos?</p>
                    <p className="text-lg text-gray-500"><strong>Tener la certeza de que estás eligiendo el centro educativo más adecuado</strong> a vuestras necesidades y preferencias entre todas las opciones posibles, es requisito primordial antes de comenzar los pasos previos para inscribir a tus hijos en dicho centro.</p>
                </div>
                <hr className="container-separator" />
                
                <div className="pb-10 px-4 w-full lg:w-2/3 mx-auto">
                    <h2 className="text-4xl font-bold">Propósito de la guía Aray</h2>
                    <hr className="title-separator mb-8" />
                    <p className="text-lg text-gray-500 mb-4">En ella encontrarás <strong>una selección con los mejores colegios de Europa</strong>, los cuales cubren tanto la educación primaria como la secundaria.</p>
                    <p className="text-lg text-gray-500">La guía, <strong>especialmente dirigida a aquellas familias que desean instalarse en un país europeo</strong> por motivos de trabajo, proyectos empresariales o educación, califica los mejores centros educativos y les otorga unos galardones específicos teniendo en cuenta distintos criterios.</p>
                </div>
                <hr className="container-separator" />
                
                <div className="pb-10 px-4 w-full lg:w-2/3 mx-auto">
                    <h2 className="text-4xl font-bold">Criterio y sistema de evaluación</h2>
                    <hr className="title-separator mb-8" />
                    <p className="text-lg text-gray-500 mb-4">El consejo académico de la guía Aray es el órgano responsable de analizar cada colegio <strong>de forma individual y anónima para formar un criterio objetivo</strong> donde se evalúa y reconoce la excelencia del centro.</p>
                    <p className="text-lg text-gray-500 mb-4">Algunas de las características más importantes que se toman en cuenta en el momento de la evaluación de los centros educativos son las siguientes:</p>
                    <ul className="list-disc pl-8 text-lg mb-4">
                        <li>Índice de admisión de los alumnos en las universidades de mayor prestigio</li>
                        <li>Nivel de capacitación y experiencia del equipo humano</li>
                        <li>Valores fundacionales</li>
                        <li>Instalaciones del centro</li>
                        <li>Política de admisiones</li>
                        <li>Historia y trayectoria</li>
                    </ul>
                    <p className="text-lg text-gray-500 mb-4">De este modo en la guía Aray existen los siguientes reconocimientos:</p>
                    <ul className="list-disc pl-8 text-lg mb-4">
                        <li>Galardón Aray de notabilidad</li>
                        <li>Galardón de sobresaliente representado con una estrella</li>
                        <li>Galardón de matrícula de honor representado con dos estrellas</li>
                        <li>Estrella honorífica a la excelencia, galardón representado con tres estrellas.</li>
                    </ul>
                    <p className="text-lg text-gray-500 mb-4">La calificación de los centros es revisada periódicamente con el fin de asegurar la relevancia en el tiempo, por lo que los centros pueden ganar o perder estrellas.</p>
                    <p className="text-lg text-gray-500 mb-4">Por otro lado, <strong>los colegios pueden recibir una insignia de capacitación cuando se valora como excelente alguna característica especial del centro.</strong></p>
                    <p className="text-lg text-gray-500 mb-4">Como por ejemplo:</p>
                    <ul className="list-disc pl-8 text-lg mb-4">
                        <li>
                            <strong>Contar con alguno de los siguientes programas:</strong>
                            <ul className="list-disc pl-8 text-lg font-light mb-2">
                                <li>Igualdad</li>
                                <li>Prevención contra el acoso escolar</li>
                                <li>Integración social</li>
                                <li>Adaptación con especialización en alumnos con TAE (trastorno del espectro autista)</li>
                                <li>Adaptación para alumnos con capacidades diferentes</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Especialización en alguna actividad:</strong>
                            <ul className="list-disc pl-8 text-lg font-light mb-2">
                                <li>Tenis</li>
                                <li>Fútbol</li>
                                <li>Hípica</li>
                                <li>Robótica</li>
                                <li>Programación</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Nivel académico de idioma:</strong>
                            <ul className="list-disc pl-8 text-lg font-light mb-2">
                                <li>Inglés</li>
                                <li>Chino</li>
                                <li>Español</li>
                                <li>Francés</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr className="container-separator" />
                
                <div className="pb-10 px-4 w-full lg:w-2/3 mx-auto">
                    <h2 className="text-4xl font-bold">Como utilizar la guia Aray?</h2>
                    <hr className="title-separator mb-8" />
                        <p className="text-lg text-gray-500 mb-4">La guía Aray ha sido diseñada para que las familias encuentren rápidamente los mejores centros educativos de Europa sin tener que perder demasiado tiempo buscando y comparando.</p>
                        <p className="text-lg text-gray-500 mb-4">En nuestra guía encontrarás la información más destacada de cada colegio, y tendrás la certeza de que en ella solo se encuentran aquellos centros que por la calidad de su enseñanza, instalaciones y profesorado están en los lugares más altos tras haber pasado por una evaluación exhaustiva.</p>
                        <p className="text-lg text-gray-500 mb-4">Una vez en la página de inicio puedes seleccionar diferentes filtros para poder ver los resultados que buscas más fácilmente.</p>
                        <p className="text-lg text-gray-500 mb-4">De este modo puedes filtrar por país, por calificación o por palabra clave, como por ejemplo, “programación”, para ver solo aquellos centros que ofrecen esta disciplina.</p>
                        <p className="text-lg text-gray-500 mb-4">Una vez obtengas los resultados que buscas puedes clicar en cada centro para ver toda la información detallada del mismo y un enlace a su sitio web.</p>
                        <p className="text-lg text-gray-500">Esperamos que la guía Aray os ayude a elegir con seguridad el mejor centro educativo para vuestros hijos.</p>
                </div>
                <hr className="container-separator" />
            </div>
        </div>
    )
}