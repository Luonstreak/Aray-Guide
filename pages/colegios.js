import Link from 'next/link';
import Image from 'next/image';
import map from '/public/images/map.png'
import graduation from '/public/images/graduation.jpg'
import SearchInput from '../components/SearchInput'
import Select from '../components/Select'
import SchoolCard from '../components/SchoolCard';
export default function colegios() {
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

    const showMap = true;

    return (
        <div className="bg-gray-100">
            <div className="w-screen py-24 md:pt-32 bg-green-500 p-8 flex flex-col items-center">
                <SearchInput />
                <div className="flex flex-col gap-4 md:flex-row flex-wrap w-full mt-4">
                    <Select name="pais" options={pais} />
                    <Select name="ciudad" options={pais} />
                    <Select name="esneñanza" options={pais} />
                    <Select name="equipamiento" options={pais} />
                    <Select name="comedor" options={pais} />
                    <Select name="idioma" options={pais} />
                </div>
                {/* <Image src={graduation} layout="fill" /> */}
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
                <div className={`grid grid-cols-1 gap-8 ${showMap ? 'md:grid-cols-2 w-1/2' : 'md:grid-cols-3 w-full'}`}>
                    {[1,2,3,4,5,6,7,8].map(el => {
                        return <SchoolCard key={el} el={el} grid={true} />
                    })}
                </div>
                {showMap && <div className="w-1/2 ml-8 fi">
                    <Image src={map} width={750} height={750} alt="map" className="rounded-lg" />
                </div>}
            </div>
        </div>
    )
}