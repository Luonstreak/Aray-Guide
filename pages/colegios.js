import Link from 'next/link';
import Image from 'next/image';
import map from '/public/images/map.png'
import graduation from '/public/images/graduation.jpg'
import SearchInput from '../components/SearchInput'
import Select from '../components/Select'
import SchoolCard from '../components/SchoolCard';
import Switch from '../components/Switch';
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Colegios() {

    const [schools, setSchools] = useState(null)
    const [filterOptions, setFilterOptions] = useState({})

    const filters = [
        "provincia",
        "pais",
        "poblacion",
        "modelo_educativo",
        "idoma_de_clase",
        "cursos_ofrecidos",
        "servicios_ofrecidos",
        "actividades_extraescolares",
        "menu_especial",
        "equipamiento",
        "servicios_especiales",
        "programa_de_integracion",
        "curriculum_academico"
    ];

    useEffect(() => {
        if(!schools){
          axios.get('https://localhost/aray.new/wp-json/wp/v2/colegios?_embed').then(res => {
            if (res.data) {
              setSchools(res.data);
            }
          }).catch(err => console.log(err, 'There was an error fetching "Colegios"'));
        }
        // if(!filterOptions.poblacion){
        //     async () => {
        //         try {
        //             Promise.all(
        //                 filters.map(filter => axios.get(`http://localhost/aray.new/wp-json/wp/v2/${filter}`).then(res => res.data))
        //             ).then(res => {
        //                 console.log(res)
        //                 setFilterOptions({ ...filterOptions, poblacion: true });
        //             });
        //             // return allFilterOptions;
        //         } catch (err) {
        //             console.log('Error fetching filter options', err);
        //         }
        //     }
        // }
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
            <div className="w-screen px-2 pt-24 md:pt-32 bg-green-500 flex flex-col items-center relative">
                <SearchInput />
                <div className="z-10 w-screen pb-4 md:pb-16 mt-4 px-2 flex gap-4 overflow-x-scroll lg:justify-center shadow-lg">
                    <Select name="pais" options={pais} />
                    <Select name="ciudad" options={pais} />
                    <Select name="enceñanza" options={pais} />
                    <Select name="equipamiento" options={pais} />
                    <Select name="comedor" options={pais} />
                    <Select name="idioma" options={pais} />
                </div>
                <div className="absolute inset-0 z-0">
                    <Image priority src={graduation} layout="fill" className="object-cover brightness-50" alt="hero image" />
                </div>
            </div>

            <div className="container mx-auto py-10 px-2 md:px-0">
                <h2 className="text-xl md:text-3xl text-gray-700 uppercase font-bold">Resultados de tu busqueda</h2>
                <hr className="title-separator" />
                <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 items-center md:pt-4">
                    <p className="text-gray-500 text-md uppercase mt-4 md:mt-0">{schools ? `${schools.length} resultados` : 'cargando resultados'}</p>
                    <Select
                        name="ordernar por"
                        options={[{ label: 'nombre asc', value: "nasc"}, { label: 'nombre des', value: "ndes"}]}
                        variant="text"
                    />
                    <Switch label="show map" />
                </div>
            </div>
            <div className="container mx-auto p-4 flex">
                <div className={`grid grid-cols-1 gap-0 md:gap-8 ${showMap ? 'md:grid-cols-2 w-1/2' : 'md:grid-cols-4 w-full'}`}>
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