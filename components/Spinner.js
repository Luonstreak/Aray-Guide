import spinner from '/public/images/icons/spinner.svg'
import Image  from 'next/image'

export default function Spinner(props){
    return <p className="mx-auto py-20 md:py-40"><Image src={spinner} width={50} height={50} /></p>
}