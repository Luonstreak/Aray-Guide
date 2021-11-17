import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/images/logo.png'
export default function Cookies(){

    const cookies = [
        {
            name: '_cfduid (notin.es)',
            duration: 'Sesion',
            description: 'publicidad',
        },
        {
            name: 'personalization_id (twitter.com)',
            duration: 'Sesion',
            description: 'twitter',
        },
        {
            name: '_meta (facebook)',
            duration: 'Sesion',
            description: 'coloca cookies en el dispositivo...',
        },
    ];

    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between pt-24">
                <div>
                    <h1>politica de cookies</h1>
                    <p>aray the informa sobre tus datos de navegacion</p>
                    <hr />
                </div>
                <Image src={logo} alt="logo" />
            </div>

            <h5>politica de cookies</h5>
            <p>las cookies son pequeñas...</p>

            <h5>tipos de cookies que utilizamos</h5>
            <p>Esta pagina web utiliza cookies...</p>
            <p>En este caso las cookies son utilizadas...</p>
            
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>Cookie (y proveedor)</th>
                        <th>Duracion</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {cookies.map(cookie => (
                        <tr key={cookie.name}>
                            <td>{cookie.name}</td>
                            <td>{cookie.duration}</td>
                            <td>{cookie.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>si desea mas informacion sobre los tipos de cookies de seguimiento y analisis de datos de Google <Link href="#"><a clasName="underline">haga click aqui</a></Link></p>
            <p>para informarce como borrar las cookies de su explorador:</p>
            <ul>
                <li><Link href="#"><a clasName="underline">Firefox</a></Link></li>
                <li><Link href="#"><a clasName="underline">Chrome</a></Link></li>
                <li><Link href="#"><a clasName="underline">Internet Explorer</a></Link></li>
                <li><Link href="#"><a clasName="underline">Safari</a></Link></li>
                <li><Link href="#"><a clasName="underline">Opera</a></Link></li>
            </ul>
        </div>
    );
}