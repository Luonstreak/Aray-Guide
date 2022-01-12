import Image from 'next/image';
import magnifier from '/public/images/icons/magnifier.svg'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router' 
import i18n from '../util/i18n.json'
import axios from 'axios'

export default function SearchInput(props){
    const router = useRouter();
    const locale = router.locale;
    const text = i18n[locale];
    const [term, setTerm] = useState('');
    const [suggestions, setSuggestions] = useState({ pais: [], poblacion: [] });
    const [filterOptions, setFilterOptions] = useState({})

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

    useEffect(() => {
        if(!filterOptions.poblacion) { fetchFilterOptions(); }
    },[filterOptions, router.query]);

    const generateTermSuggestions = (term) => {
        const newSuggestions = { pais: [], poblacion: [] };
        if(!term || term.length < 2) {
            setSuggestions(newSuggestions);
            return;
        }
        setTerm(term);
        if(filterOptions.pais){
            filterOptions.pais.map(el => {
                if(el.label.includes(term)) newSuggestions.pais.push(el);
            })
        }
        if(filterOptions.poblacion){
            filterOptions.poblacion.map(el => {
                if(el.label.includes(term)) newSuggestions.poblacion.push(el);
            })
        }
        setSuggestions(newSuggestions);
    }

    const handleTermSearch = e => {
        const { query } = router;
        const code = (e.keyCode ? e.keyCode : e.which);
        // if key enter pressed execute search
        if (code == 13) {
            let newQ = { ...query };
            if(e.target.value === ''){
                delete newQ.q;
            } else {
                newQ.q = e.target.value.toLowerCase();
            }
            setTerm('');
            router.push({ pathname: '/buscar', query: newQ });
        }
    }

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

    const submitQuery = (q,id) => {
        if(id){
            router.push(`/buscar?${q}=${id}`);
        } else {
            router.push(`/buscar?q=${q}`);
        }
    }
    

    return(
        <div className="z-10 w-full max-w-screen-md relative">
            <div className="relative z-10 w-full max-w-screen-md">
                <input
                    autoComplete="off"
                    spellCheck="false"
                    name="q"
                    className="bg-opacity-90 w-full lg:px-8 lg:py-4 px-4 py-2 bg-white bg-opacity-90 text-gray-900 ring-1 ring-gray-200 rounded text-xl outline-none focus:ring ring-gray-200"
                    type="text"
                    placeholder={text.globSrchInput}
                    onKeyPress={handleTermSearch}
                    onChange={e => generateTermSuggestions(e.target.value)}
                />
                {suggestions.pais.length > 0 && (
                    <ul className="absolute bg-white top-16 rounded w-full drop-shadow-xl left-0">
                        <li className="px-4 py-2 bg-gray-200 font-bold rounded-t"><p>{text.pais}:</p></li>
                        {suggestions.pais.map(el => (
                            <li key={el.label} onClick={() => submitQuery('pais',el.value)} className="hover:bg-yellow-500/20 px-8 py-4 rounded cursor-pointer capitalize text-lg">{el.label}</li>
                        ))}
                    </ul>
                )}
                {suggestions.poblacion.length > 0 && (
                    <ul className="absolute bg-white top-16 rounded w-full drop-shadow-xl left-0">
                        <li className="px-4 py-2 bg-gray-200 font-bold rounded-t"><p>{text.poblacion}:</p></li>
                        {suggestions.poblacion.map(el => (
                            <li key={el.label} onClick={() => submitQuery('poblacion',el.value)} className="hover:bg-yellow-500/20 px-8 py-4 rounded cursor-pointer capitalize text-lg">{el.label}</li>
                        ))}
                    </ul>
                )}
                <button className="absolute top-2 lg:top-4 right-4" onClick={() => handleTermSearch({ keyCode: 13, target: { value: term }})}>
                    <Image src={magnifier} width={32} height={32} />
                </button>
            </div>
        </div>
    )
}