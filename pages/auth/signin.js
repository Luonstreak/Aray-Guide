import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { getCsrfToken } from 'next-auth/react';

export default function SignIn({ csrfToken }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const router = useRouter();
    const locale = router.locale;

    const _handleInputChange = e => {
        e.preventDefault();
        if(e.target.type === 'email'){
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }
    return (
        <div className="pt-20 h-screen">
            <div className="card bg-white w-1/2 rounded-lg border border-solid border-current mx-auto mt-10 p-12">
                <h1 className="text-4xl text-center mb-8">Login</h1>
                {error && <p className="text-center mb-4 text-red-500">{error}</p>}
                <form method="post" action="/api/auth/callback/credentials" className="flex flex-col max-w-xs mx-auto gap-4">
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    <input className="rounded-md border p-2" name="email" type="email" onChange={_handleInputChange} value={email} placeholder="email" />
                    <input className="rounded-md border p-2" name="password" type="password" onChange={_handleInputChange} value={password} placeholder="password" />
                    <button className='rounded-md p-2 bg-yellow-600 text-white w-full' type="submit">
                        Sign in
                    </button>
                    {/* <a className="text-center mb-8" href="#">register</a> */}
                </form>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    }
  }