import Image from 'next/image';
import Link from 'next/link'

export default function Navbar(props){
    return(
        <input 
            className="w-full lg:px-8 lg:py-4 px-4 py-2 bg-white bg-opacity-90 text-gray-900 ring-1 ring-gray-200 rounded text-xl outline-none focus:ring ring-gray-200" 
            type="search"
            placeholder="Buscar colegio" 
        />
    )
}