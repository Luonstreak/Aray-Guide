export default function Select({ name, options, multi, variant = 'default' }){
    const variants = {
        default: "bg-gray-200 text-gray-700 outline-none mt-1 ring-primarylight focus:ring focus:ring-primary",
        text: "bg-gray-50 text-gray-700 focus:text-gray-800 hover:bg-gray-100 outline-none"
    }
    return (
        <>
            <select name={name} multiple={multi} disabled={!options.length} className={`px-4 py-2 rounded-lg h-12 text-lg capitalize ${variants[variant]}`}>
                <option default>{name}</option>
                {options.map(option => <option key={option.label} value={option.value}>{option.label}</option>)}
            </select>
        </>
    )
}