export default function Select({ name, options, multi, variant }){
    return (
        <select defaultValue={-1} name={name} multiple={multi} disabled={!options.length} className="px-4 py-2 rounded ring-1 ring-gray-100 bg-white text-gray-700 w-full sm:w-44 h-12 focus:ring focus:ring-gray-300 text-lg capitalize">
            <option disabled value className="capitalize">{name}</option>
            {options.map(option => <option key={option.label} value={option.value} className="capitalize">{option.label}</option>)}
        </select>
    )
}