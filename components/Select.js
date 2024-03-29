import wp_terms from '../util/wp_terms.json'
import { useRouter } from 'next/router' 

export default function Select(props){

    const router = useRouter();
    const locale = router.locale;
    
    const variants = {
        default: "bg-white text-gray-800 outline-none mt-1 ring-1 ring-gray-200",
        text: "bg-gray-50 text-gray-700 focus:text-gray-800 hover:bg-gray-100 outline-none"
    }

    const { name, label, value = null, options, multi, variant = 'default', onChange = () => {}} = props;
    return (
        <select
            name={name}
            multiple={multi}
            disabled={!options || !options.length}
            style={{ maxWidth: '200px' }}
            className={`bg-gray-50 p-2 rounded-md h-10 text-lg capitalize w-auto ${variants[variant]}`}
            onChange={onChange}
            value={value || -1}
        >
            <option default value={null}>{label}</option>
            {options && options.map(option => {
                const label = (name !== 'poblacion' && name !== 'provincia')
                    ? wp_terms[locale][name][option.value]
                    : wp_terms[name][option.value];
                return (
                <option
                    key={`${option.name}-${option.value}`}
                    value={option.value}
                >{label}</option>
            )})}
        </select>
    )
}