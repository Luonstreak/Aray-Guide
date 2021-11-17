export default function Gdpr(){
    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div className="bg-white rounded-lg p-8 flex flex-col w-11/12 md:w-1/2 z-50">
                <h1>La guia aray</h1>
                <p>utiliza cookies</p>
                <hr className="w-8 border-2 border-yellow-500" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className="flex flex-wrap gap-4 justify-end pt-8">
                    <button className="w-full md:w-auto px-4 py-2 rounded bg-white border-2 border-yellow-600 text-yellow-600">configurar cookies</button>
                    <button className="w-full md:w-auto px-4 py-2 rounded bg-white border-2 border-yellow-600 text-yellow-600">solo cookies necesarias</button>
                    <button className="w-full md:w-auto px-4 py-2 rounded bg-yellow-600  border-2 border-yellow-600 text-white">aceptar cookies</button>
                </div>
            </div>
        </div>
    )
}