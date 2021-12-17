import i18n from '../util/i18n.json'
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Gdpr(){
    const [showing, setShowing] = useState(true);
    const router = useRouter();
    const locale = router.locale;
    const text = i18n[locale];

    if(!showing) return <div></div>;
    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div className="bg-white rounded-lg p-8 flex flex-col w-11/12 md:w-1/2 z-50">
                <h1 className="text-2xl md:text-4xl uppercase font-bold">{text.gdprTtl}</h1>
                <p className="text-lg md:text-xl uppercase text-gray-500">{text.gdprSub}</p>
                <hr className="title-separator" />
                <p>{text.gdprBody}</p>
                <div className="flex flex-wrap gap-4 justify-end pt-8">
                    {/* <button className="capitalize w-full md:w-auto px-4 py-2 rounded bg-white border-2 border-primary text-primary">configurar cookies</button> */}
                    <button onClick={() => setShowing(false)} className="capitalize w-full md:w-auto px-4 py-2 rounded bg-white border-2 border-primarylight text-primarylight">{text.gdprBtn}</button>
                    <button onClick={() => setShowing(false)} className="capitalize w-full md:w-auto px-4 py-2 rounded bg-primary  border-2 border-primary text-white">{text.gdprBtn2}</button>
                </div>
            </div>
        </div>
    )
}