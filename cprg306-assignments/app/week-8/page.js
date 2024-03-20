"use client";

import { useUserAuth } from "./utils/auth-context";
import Link from 'next/link';

export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => await gitHubSignIn();

    const handleSignOut = async () => await firebaseSignOut();

    return (
        <main>
            <h1 className="flex justify-center items-center text-xl font-bold m-10 text-purple-300 h-full">
             <div className="m-2">
                 <p className="m-2">{user ? "Hi there!" : "Please sign in:"}</p>
                 <p className="m-2">{user?.email}</p>
                 <p className="m-2">{user?.displayName}</p>
             </div>
            </h1>
            <div className="flex justify-center">
            {user ? (
                <div>
                    <button className="bg-sky-800 text-white font-bold py-2 px-2 rounded m-4 p-2" onClick={handleSignOut}>Sign Out</button>
                    <p className='text-black font-bold hover:text-sky-500'>
                        <Link href="shopingList">Shopping List</Link>
                    </p>
                </div>
                ) : (
                <button className="bg-sky-800 text-white font-bold py-2 px-2 rounded m-4 p-2" onClick={handleSignIn}>Sign In</button>
            )}
            </div>
        </main>
    );
}
 