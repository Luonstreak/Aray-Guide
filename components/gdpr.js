import i18n from '../util/i18n.json'
import Switch from '../components/Switch'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Gdpr(){
    const [showing, setShowing] = useState(false);
    const [expand, setExpand] = useState(false);
    const [allowMarketing, setAllowMarketing] = useState(true)
    const [allowBehaviour, setAllowBehaviour] = useState(true);
    const router = useRouter();
    const locale = router.locale;
    const text = i18n[locale];

    // const marketing = [];
    const behavior = ['_clck','_clsk','CLID','ANONCHK','MR','MUID','SM'];

    useEffect(() => {
        if(!getCookie('gdpr_accepted')) setShowing(true);
    },[])

    const getCookie = (name) => {
        return document.cookie.split(';').some(c => {
            return c.trim().startsWith(name + '=');
        });
    }

    const removeCookie = (name, path, domain) => {
        if(getCookie(name)){
            document.cookie = name + "=" +
                ((path) ? ";path="+path:"")+
                ((domain)?";domain="+domain:"") +
                ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    }

    const handleCookieConfig = () => {
        // if(allowMarketing){
        //     // add marketing cookies such as twitter or facebook or goole
        // } else {
        //     // remove marketing cookies;
        // }
        if(allowBehaviour){
            (function(c,l,a,r,i,t,y){
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "a28jqre20z");
        } else {
            behavior.forEach(el => removeCookie(el));
        }
        document.cookie = 'gdpr_accepted=true';
        setShowing(false);
    }


    if(!showing) return <div></div>;
    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div className="bg-white rounded-lg p-8 flex flex-col w-11/12 md:w-1/2 z-50">
                <h1 className="text-2xl md:text-4xl uppercase font-bold">{text.gdprTtl}</h1>
                <p className="text-lg md:text-xl uppercase text-gray-500">{text.gdprSub}</p>
                <hr className="title-separator" />
                <p>{text.gdprBody}</p>
                {expand && <div className='flex flex-col items-start gap-2 mt-4'>
                    <Switch label={text.gdprMark}active={allowMarketing} onChange={() => setAllowMarketing(!allowMarketing)} />
                    <Switch label={text.gdprBeha} active={allowBehaviour} onChange={() => setAllowBehaviour(!allowBehaviour)} />
                    <Switch label={text.gdprCore} active disabled />
                </div>}
                <div className="flex flex-wrap gap-4 justify-end pt-8">
                    {/* <button className="capitalize w-full md:w-auto px-4 py-2 rounded bg-white border-2 border-primary text-primary">configurar cookies</button> */}
                    <button onClick={() => setExpand(!expand)} className="capitalize w-full md:w-auto px-4 py-2 rounded bg-white border-2 border-primarylight text-primarylight">{expand ? text.gdprCollapseBtn : text.gdprExpandBtn}</button>
                    <button onClick={handleCookieConfig} className="capitalize w-full md:w-auto px-4 py-2 rounded bg-primary  border-2 border-primary text-white">{text.gdprBtn2}</button>
                </div>
            </div>
        </div>
    )
}