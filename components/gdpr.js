export default function Gdpr(){
    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div className="bg-white rounded-lg p-8 flex flex-col w-11/12 md:w-1/2 z-50">
                <h1 className="text-2xl md:text-4xl uppercase font-bold">La guia aray</h1>
                <p className="text-lg md:text-xl uppercase text-gray-500">utiliza cookies</p>
                <hr className="title-separator" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className="flex flex-wrap gap-4 justify-end pt-8">
                    <button className="capitalize w-full md:w-auto px-4 py-2 rounded bg-white border-2 border-primary text-primary">configurar cookies</button>
                    <button className="capitalize w-full md:w-auto px-4 py-2 rounded bg-white border-2 border-primary text-primary">solo cookies necesarias</button>
                    <button className="capitalize w-full md:w-auto px-4 py-2 rounded bg-primary  border-2 border-primary text-white">aceptar cookies</button>
                </div>
            </div>
        </div>
    )
}