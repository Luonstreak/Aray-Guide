import Link from 'next/link';
import { useRouter } from 'next/router'
import { useSession, getSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';
import SchoolCard from '../components/SchoolCard';
import Spinner from '../components/Spinner'

export async function getServerSideProps(context) {
    return {
      props: {
            session: await getSession(context),
      },
    }
}


function Profile(props){

    const { data: session } = useSession()

    const [school, setSchool] = useState();

    if (typeof window === "undefined") return null

    if (session) {
        return(
            <div className="bg-gray-50">
                {/* DETALLES */}
                <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row p-4 md:py-20 md:px-4">
                    <div className="md:w-2/3 mb-8">
                        <h1 className="text-gray-700 text-2xl md:text-4xl font-bold uppercase">Profile</h1>
                        <p>Signed in as {session.user.email}</p>
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto p-4">
                    <h2 className="text-gray-700 uppercase font-bold text-xl md:text-2xl lg:text-4xl"></h2>
                    <hr className="title-separator" />
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="flex-1">
                            <h2 className="mb-2 mt-4 uppercase font-bold text-gray-700">CENTROS</h2>
                            <Link href="/school/new" passHref><button className="rounded bg-primary text-white px-4 py-2 mt-2">create school</button></Link>
                            {school ? (
                                <div className="grid grid-cols-1 px-2 md:px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full" >
                                    {centers.map((el, i) => <SchoolCard key={el.id} el={{ i: showMap ? i : null, ...el }} grid />)}
                                </div> 
                            ) : <Spinner />}
                        </div>
                    </div>
                </div>
                <hr className="border-gray-400 border-1 w-5/6 mx-auto my-8" />
            </div>
        )
    }
    
    return <div className='p-20 mx-auto'>
        <p>Access Denied</p>
        <button onClick={() => signIn()}>Sign in</button>
    </div>
}

export default Profile
