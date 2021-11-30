import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import graduation from '/public/images/graduation.jpg'
import Select from '../components/Select'
import SchoolCard from '../components/SchoolCard'
import Switch from '../components/Switch'
import { useEffect, useState } from 'react'
import axios from 'axios'
import filterIndex from '../util/filterIndex.json'
import close from '/public/images/icons/close.svg'
import wp_terms from '../util/wp_terms.json'
import Map from '../components/Map'
import Spinner from '../components/Spinner'

export default function Buscar() {

    const router = useRouter();

    const [schools, setSchools] = useState(null)
    const [filteredSchools, setFilteredSchools] = useState([]);
    const [filterOptions, setFilterOptions] = useState({})
    const [filtersApplied, setFiltersApplied] = useState({})
    const [showMap, setShowMap] = useState(false)

    const filters = [
        "provincia",
        "pais",
        "poblacion",
        "modelo_educativo",
        "idioma_de_clase",
        "cursos_ofrecidos",
        "servicios_ofrecidos",
        "actividades_extraescolares",
        "menu_especial",
        "equipamiento",
        "programa_de_integracion",
        "curriculum_academico"
    ];

    const fetchFilterOptions = async () => {
        Promise.all(filters.map(filter => axios.get(`http://api.aray.guide/wp-json/wp/v2/${filter}`).then(res => res.data)))
            .then(filterOptions => {
                // TODO: REFACTOR THIS IF POSSIBLE OPTIMOZE PERFORMANCE
                const parsedFilters = filterOptions.reduce((acc,filter) => {
                    const values = filter.reduce((acc, curr) => {
                        if(acc[curr.taxonomy]){ acc[curr.taxonomy].push({ label: curr.name, value: curr.id }) }
                        else acc[curr.taxonomy] = [{ label: curr.name, value: curr.id }];
                        return acc;
                    },{});
                    return { ...acc, [Object.keys(values)[0]]: values[Object.keys(values)[0]] }
                },{});
                setFilterOptions(parsedFilters);
            });
    }

    useEffect(() => {
        // fetch schools on load
        if(!schools){
            axios.get('http://api.aray.guide/wp-json/wp/v2/colegios?_embed').then(res => {
                if (res.data) {
                setSchools(res.data);
                }
            }).catch(err => console.log(err, 'There was an error fetching "Colegios"'));
        }
        // fetch filter options on load
        if(!filterOptions.poblacion){
            fetchFilterOptions();
        }
        // if url params pre-populate filters state hoo
        setFiltersApplied(router.query);

        // if filters exist, filter schools
        if(schools && filtersApplied){
            let filteredSchools = [...schools];
            Object.entries(filtersApplied).forEach(([filter, val]) => {
                filteredSchools = filteredSchools.filter(school => {
                    if(filter === 'q'){
                        return school.title.rendered.toLowerCase().includes(val)
                    }
                    return Array.isArray(school.ACF[filter])
                        ? school.ACF[filter].includes(Number(val))
                        : school.ACF[filter] === Number(val)
                });
            });
            setFilteredSchools(filteredSchools)
        }
    },[schools, router.query, filtersApplied]);

    const handleTermSearch = e => {
        const { pathname, query } = router;
        const code = (e.keyCode ? e.keyCode : e.which);
        // if key enter pressed execute search
        if (code == 13) {
            let newQ = { ...query };
            if(e.target.value === ''){
                delete newQ.q;
            } else {
                newQ.q = e.target.value;
            }
            router.push({ pathname, query: newQ });
        }
    }

    const onFilterChange = e => {
        const { pathname, query } = router;
        const addFilter = Number(e.target.value);
        if(addFilter){
            router.push({ pathname, query: { ...query, [e.target.name]: addFilter } });
        } else {
            let newQ = {...query};
            delete newQ[e.target.name];
            router.push({ pathname, query: newQ });
        }
    }

    const removeTag = (field) => {
        const { pathname, query } = router;
        if(!field){
            router.push({ pathname, query: {} });
            return;
        }
        let newQ = {...query};
        delete newQ[field];
        router.push({ pathname, query: newQ });
    }
    return (
        <div className="bg-gray-50">
            <div className="w-screen px-2 pt-24 md:pt-32 pb-8 md:pb-16 bg-gray-100 flex flex-col items-center relative">
                <input
                    name="q"
                    className="z-10 bg-opacity-90 w-full max-w-screen-md lg:px-8 lg:py-4 px-4 py-2 bg-white bg-opacity-90 text-gray-900 ring-1 ring-gray-200 rounded text-xl outline-none focus:ring ring-gray-200" 
                    type="text"
                    placeholder="Buscar colegio"
                    onKeyPress={handleTermSearch}
                    defaultValue={router.query.q}
                />
                <div className="absolute inset-0 z-0">
                    {/* <Image priority src={graduation} layout="fill" className="object-cover object-bottom brightness-50" alt="hero image" /> */}
                </div>
            </div>

            <div className="container max-w-screen-lg mx-auto py-4">
                <div className="flex gap-4 overflow-x-scroll pb-4">
                    <Select
                        name="poblacion"
                        label={filterIndex['poblacion']}
                        onChange={onFilterChange}
                        options={filterOptions['poblacion']}
                        value={filtersApplied['poblacion']} 
                    />
                    <Select
                        name="pais"
                        label={filterIndex['pais']}
                        onChange={onFilterChange}
                        options={filterOptions['pais']}
                        value={filtersApplied['pais']} 
                    />
                    <Select name="curriculum_academico"
                        label={filterIndex['curriculum_academico']}
                        onChange={onFilterChange}
                        options={filterOptions['curriculum_academico']}
                        value={filtersApplied['curriculum_academico']} 
                    />
                    <Select name="equipamiento"
                        label={filterIndex['equipamiento']}
                        onChange={onFilterChange}
                        options={filterOptions['equipamiento']}
                        value={filtersApplied['equipamiento']} 
                    />
                    <Select name="menu_especial"
                        label={filterIndex['menu_especial']}
                        onChange={onFilterChange}
                        options={filterOptions['menu_especial']}
                        value={filtersApplied['menu_especial']} 
                    />
                    <Select name="idioma_de_clase"
                        label={filterIndex['idioma_de_clase']}
                        onChange={onFilterChange}
                        options={filterOptions['idioma_de_clase']}
                        value={router.query['idioma_de_clase']} 
                    />
                </div>
            </div>

            <div className="container max-w-screen-lg mx-auto px-4 md:px-0">
                {/* APPLIED FILTER LABELS*/}
                <div className="flex gap-2 mb-4 overflow-x-scroll flex-nowrap md:flex-wrap">
                    {Object.entries(filtersApplied).map(([key, val], index) => (
                        <div key={`${key}${val}${index}`} className="flex w-auto items-center rounded bg-primarylight flex-shrink-0">
                            <p className={`px-4 text-white ${key !== 'q' && 'capitalize'} whitespace-nowrap`}>{key === 'q' ? `"${val}"` : wp_terms[key][val]}</p>
                            <button className="p-1 md:pt-3 md:pb-2 md:px-3 text-white hover:bg-primary rounded-r" onClick={() => removeTag(key)}><Image src={close} width={24} height={24} alt="close icon" /></button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-3xl text-gray-700 font-bold">Resultados de tu busqueda</h2>
                    <div className="hidden md:block flex-shrink-0">
                        <Switch
                            label="show map"
                            onChange={() => setShowMap(!showMap)}
                            active={showMap} 
                        />
                    </div>
                </div>
                <hr className="title-separator" />
                {/* <div className="flex flex-wrap gap-4 items-centermd:pt-4">
                    <p className="w-full text-center md:text-left text-gray-500 text-md uppercase mt-4 md:mt-0">{filteredSchools ? `${filteredSchools.length} resultado${filteredSchools.length === 1 ? '' : 's'}` : schools ? `${schools.length} resultado${schools.length === 1 ? '' : 's'}` : 'cargando resultados'}</p>
                    <Select
                        label="ordernar por"
                        name="ordernar por"
                        options={[{ label: 'nombre ascendente', value: "nasc"}, { label: 'nombre descendente', value: "ndes"}]}
                        variant="text"
                    />
                </div> */}
            </div>
            <div className="container max-w-screen-lg mx-auto pt-4 pb-16 flex">
                {schools
                    ? Object.keys(filtersApplied).length > 0
                        ? (filteredSchools.length > 0)
                            ? <div className={`grid grid-cols-1 gap-0 md:gap-4 ${showMap ? 'md:grid-cols-2 w-1/2' : 'md:grid-cols-4 w-full'}`}>
                                {filteredSchools.map((el, i) => <SchoolCard key={el.guid.rendered} el={{ i, ...el }} grid />)}
                            </div> 
                            : <p className="text-2xl text-gray-400 text-center w-full h-full py-10 font-bold">No hay colegios con esos parametros.</p>
                        : (
                            <div className={`grid grid-cols-1 gap-0 md:gap-4 ${showMap ? 'md:grid-cols-2 w-1/2' : 'md:grid-cols-4 w-full'}`}>
                                {schools.map((el, i) => <SchoolCard key={el.guid.rendered} el={{ i: showMap ? i : null, ...el }} grid />)}
                            </div> 
                        )
                        : <Spinner />
                    }
                {schools && showMap && <div className="w-1/2 ml-8"><Map markers={filteredSchools || schools} /></div>}
            </div>
        </div>
    )
}