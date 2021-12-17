import Image from 'next/image';
import magnifier from '/public/images/icons/magnifier.svg'
import { useState } from 'react';
import { useRouter } from 'next/router' 
import i18n from '../util/i18n.json'

export default function SearchInput(props){
    const router = useRouter();
    const locale = router.locale;
    const text = i18n[locale];
    const [term, setTerm] = useState('')
    

    return(
        <div className="z-10 w-full max-w-screen-md relative">
            <input
                name="q"
                className="bg-opacity-90 w-full lg:px-8 lg:py-4 px-4 py-2 bg-white bg-opacity-90 text-gray-900 ring-1 ring-gray-200 rounded text-xl outline-none focus:ring ring-gray-200"
                type="text"
                placeholder={text.globSrchInput} 
                onChange={e => setTerm(e.target.value)}
                value={term}
            />
            <button className="absolute top-2 lg:top-4 right-4" onClick={() => term && props.onChange(term)}>
                <Image src={magnifier} width={32} height={32} />
            </button>
        </div>
    )
}