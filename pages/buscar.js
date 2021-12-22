import Image from 'next/image';
import { useRouter } from 'next/router'
import Select from '../components/Select'
import SchoolCard from '../components/SchoolCard'
import Switch from '../components/Switch'
import { useEffect, useState } from 'react'
import axios from 'axios'
import close from '/public/images/icons/close.svg'
import graduation from '/public/images/graduation.jpg'
import wp_terms from '../util/wp_terms.json'
import Map from '../components/Map'
import Spinner from '../components/Spinner'
import i18n from '../util/i18n.json'

export default function Buscar() {

    const router = useRouter();
    const locale = router.locale;
    const text = i18n[locale];

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
        "idioma_de_clases",
        "cursos_ofrecidos",
        "servicios_ofrecidos",
        "actividades_extraescolares",
        "menu_especial",
        "equipamiento",
        "programas_de_integracion",
        "curriculum_academico"
    ];
    
    const fetchFilterOptions = async () => {
        Promise.all(filters.map(filter => axios.get(`https://ouroinc.com/wp-json/wp/v2/${filter}`).then(res => res.data)))
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
            axios.get('https://ouroinc.com/wp-json/wp/v2/colegios?per_page=100&_embed').then(res => {
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
                        const pureTitle = school.title.rendered.toLowerCase().replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()´’]/g,"").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        return pureTitle.includes(val)
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
                newQ.q = e.target.value.toLowerCase();
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
        <div className="bg-gray-50 relative">
            <div className="w-screen px-2 md:px-4 pt-20 md:pt-24 pb-4 md:pb-8 bg-gray-100 flex flex-col items-center relative">
                <input
                    name="q"
                    className="z-10 bg-opacity-90 w-full max-w-screen-md lg:px-8 lg:py-4 px-4 py-2 bg-white bg-opacity-90 text-gray-900 ring-1 ring-gray-200 rounded text-xl outline-none focus:ring ring-gray-200" 
                    type="text"
                    placeholder={text.globSrchInput}
                    onKeyPress={handleTermSearch}
                    defaultValue={router.query.q}
                />
                <div className="absolute inset-0 z-0">
                    <Image priority src={graduation} layout="fill" className="object-cover object-bottom brightness-50" alt="hero image" />
                </div>
            </div>

            <div className={`bg-gray-100 py-4 px-2 md:px-4 flex justify-between items-center ${showMap && 'sticky top-0 z-20'}`}>
                <div className="flex gap-4 overflow-x-scroll p-1 pb-4 md:pb-2">
                    <Select
                        name="poblacion"
                        label={text['poblacion']}
                        onChange={onFilterChange}
                        options={filterOptions['poblacion']}
                        value={filtersApplied['poblacion']} 
                    />
                    <Select
                        name="pais"
                        label={text['pais']}
                        onChange={onFilterChange}
                        options={filterOptions['pais']}
                        value={filtersApplied['pais']} 
                    />
                    <Select 
                        name="curriculum_academico"
                        label={text['curriculum_academico']}
                        onChange={onFilterChange}
                        options={filterOptions['curriculum_academico']}
                        value={filtersApplied['curriculum_academico']} 
                    />
                    <Select 
                        name="equipamiento"
                        label={text['equipamiento']}
                        onChange={onFilterChange}
                        options={filterOptions['equipamiento']}
                        value={filtersApplied['equipamiento']} 
                    />
                    <Select 
                        name="menu_especial"
                        label={text['menu_especial']}
                        onChange={onFilterChange}
                        options={filterOptions['menu_especial']}
                        value={filtersApplied['menu_especial']} 
                    />
                    <Select 
                        name="idioma_de_clases"
                        label={text['idioma_de_clases']}
                        onChange={onFilterChange}
                        options={filterOptions['idioma_de_clases']}
                        value={router.query['idioma_de_clases']} 
                    />
                </div>
                <div className="hidden lg:block flex-shrink-0 ml-4">
                    <Switch
                        label={text.map}
                        onChange={() => setShowMap(!showMap)}
                        active={showMap} 
                    />
                </div>
            </div>
            {/* APPLIED FILTER LABELS*/}
            <div className="flex gap-2 px-2 md:px-4 overflow-x-scroll flex-nowrap md:flex-wrap">
                {Object.entries(filtersApplied).map(([key, val], index) => (
                    <div key={`${key}${val}${index}`} className="flex w-auto items-center rounded bg-primarylighter bg-opacity-50 flex-shrink-0">
                        <p className={`px-4 text-primary ${key !== 'q' && 'capitalize'} whitespace-nowrap`}>{key === 'q' ? `"${val}"` : (key ==='poblacion' || key ==='provincia') ? wp_terms[key][val] : wp_terms[locale][key][val]}</p>
                        <button className="p-1 pt-2 px-2 md:pt-3 md:pb-2 md:px-3 text-white hover:bg-primarylighter rounded-r" onClick={() => removeTag(key)}><Image src={close} width={24} height={24} alt="close icon" /></button>
                    </div>
                ))}
            </div>
            <div className="flex relative">
                <div className={`container max-w-screen-lg  pt-4 pb-16 flex ${showMap ? 'w-1/2' : 'mx-auto'}`}>
                    {schools
                        ? Object.keys(filtersApplied).length > 0
                            ? (filteredSchools.length > 0)
                                ? <div className={`grid grid-cols-1 px-2 md:px-4 ${showMap ? 'sm:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full'}`}>
                                    {filteredSchools.map((el, i) => <SchoolCard key={el.guid.rendered} el={{ i: showMap ? i : null, ...el }} grid />)}
                                </div> 
                                : <p className="text-2xl text-gray-400 text-center w-full h-full py-10 font-bold">{text.busResulEmpt}</p>
                            : (
                                <div className={`grid grid-cols-1 px-2 md:px-4 ${showMap ? 'sm:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full'}` }>
                                    {schools.map((el, i) => <SchoolCard key={el.guid.rendered} el={{ i: showMap ? i : null, ...el }} grid />)}
                                </div> 
                            )
                            : <Spinner />
                        }
                </div>
                {schools && showMap && <div className="container w-1/2 h-[60rem] sticky top-24 right-0 bottom-0">
                    <Map square markers={filteredSchools || schools} />
                </div>}
            </div>
        </div>
    )
}