import Image from 'next/image';
import Link from 'next/link'

export default function Navbar(props){
    return(
        <input 
            className={`w-full ${props.large ? "px-8 py-4" : "px-4 py-2"} mx-4 bg-white text-gray-900 ring-1 ring-gray-200 rounded text-xl outline-none focus:ring ring-gray-200`} 
            type="search"
            placeholder="Buscar colegio" 
        />
    )
}