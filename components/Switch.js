export default function Switch({ label, onChange, active }){
    return (
        <div className="flex items-center justify-center" onClick={onChange}>
            <input type="checkbox" name="toggle" className="hidden group" />
            <p className="text-gray-500 uppercase mr-2">{label}</p>
            <label className="relative w-12 h-6 flex select-none cursor-pointer" htmlFor="toggle">
                <span className={`absolute left-0 top-0 h-full w-full rounded-full border-2 border-gray-100 ${active ? 'bg-primarylight hover:bg-primary' : 'bg-gray-200 hover:bg-gray-300'}`}></span>
                <span className={`h-6 w-6 border-2 absolute z-10 rounded-full bg-white transition-left duration-300 ease-in-out flex justify-center items-center border-gray-200 ${active ? 'left-6' : 'left-0'}`}></span>
            </label>
        </div>
    );
}