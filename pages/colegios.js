import Link from 'next/link';
import Image from 'next/image';
import map from '/public/images/map.png'
import graduation from '/public/images/graduation.jpg'
import SearchInput from '../components/SearchInput'
import Select from '../components/Select'
import SchoolCard from '../components/SchoolCard';
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Colegios() {

    const [schools, setSchools] = useState(null)

    useEffect(() => {
        if(!schools){
          axios.get('https://localhost/aray.new/wp-json/wp/v2/colegios?_embed').then(res => {
            if (res.data) {
              setSchools(res.data);
            }
          }).catch(err => console.log(err, 'There was an error fetching "Colegios"'));
        }
    });

    const pais = [
        {
            label: "España",
            value: "españa",
        },
        {
            label: "Francia",
            value: "francia",
        },
        {
            label: "Alemaña",
            value: "alemaña",
        },
    ];

    const showMap = false;

    return (
        <div className="bg-gray-50">
            <div className="w-screen py-24 md:pt-32 bg-green-500 p-8 flex flex-col items-center relative">
                <SearchInput className="z-30" />
                    {/* <div className="z-0 absolute inset-0">
                        <Image priority src={graduation} layout="fill" className="object-cover brightness-90" alt="imagen de graduacion" />
                    </div> */}
                <div className="flex flex-col gap-4 md:flex-row flex-wrap w-full mt-4">
                    <Select name="pais" options={pais} />
                    <Select name="ciudad" options={pais} />
                    <Select name="esneñanza" options={pais} />
                    <Select name="equipamiento" options={pais} />
                    <Select name="comedor" options={pais} />
                    <Select name="idioma" options={pais} />
                </div>
            </div>

            <div className="container mx-auto bg-orange-300 p-4">
                <h2>Resultados de tu busqueda</h2>
                <hr className="border-yellow-500 border-1 md:border-2 w-full my-8 md:mb-0 md:w-16 my-2" />
                <div className="flex flex-col md:flex-row gap-4 md:items-center md:pt-4">
                    <p className="text-gray-500 text-sm">25 resultados</p>
                    <Select
                        name="ordernar por"
                        options={[{ label: 'nombre asc', value: "nasc"}, { label: 'nombre des', value: "ndes"}]}
                        variant="text"
                    />
                </div>
            </div>
            <div className="container mx-auto bg-red-500 p-4 flex">
                <div className={`grid grid-cols-1 gap-8 ${showMap ? 'md:grid-cols-2 w-1/2' : 'md:grid-cols-4 w-full'}`}>
                    {schools 
                        ? schools.map(el => <SchoolCard key={el.guid.rendered} el={el} grid />) 
                        : <p>loading...</p>
                    }
                </div>
                {showMap && <div className="w-1/2 ml-8 fi">
                    <Image src={map} width={750} height={750} alt="map" className="rounded-lg" />
                </div>}
            </div>
        </div>
    )
}