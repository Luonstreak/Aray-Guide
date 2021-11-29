export default function Select(props){
    
    const variants = {
        default: "bg-gray-200 text-gray-700 outline-none mt-1 ring-primarylight focus:ring focus:ring-primary",
        text: "bg-gray-50 text-gray-700 focus:text-gray-800 hover:bg-gray-100 outline-none"
    }
    const { name, label, value = null, options, multi, variant = 'default', onChange = () => {}} = props;
    return (
        <select
            name={name}
            multiple={multi}
            disabled={!options || !options.length}
            style={{ maxWidth: '200px' }}
            className={`px-4 py-2 rounded-lg h-12 text-lg capitalize ${variants[variant]}`}
            onChange={onChange}
            value={value || -1}
        >
            <option default value={null}>{label}</option>
            {options && options.map(option => (
                <option
                    key={`${option.name}-${option.value}`}
                    value={option.value}
                >{option.label}</option>
            ))}
        </select>
    )
}