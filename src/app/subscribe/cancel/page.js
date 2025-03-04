// NextJS
"use client"


import Head from 'next/head'
import { useEffect } from 'react'

//NextUI
import { Link } from "@heroui/react"
import { useUser } from '../../../providers/UserProvider';


export default function Cancel ({}) {
    
  const { userData, getUserData } = useUser()

  useEffect(() => {
    //Update gems on purchase
    if(userData){
      getUserData(userData.uid, userData.email)
    }
  }, [userData])


  return (
    <>
      <Head>
        <title>Checkout error</title>
      </Head>
      <main>
        
        <div className='flex flex-col justify-center text-theme my-24'>
          <div className="container mx-auto px-4 py-8 mb-6 text-center">
            <div className="text-4xl md:text-8xl mb-4 font-semibold text-theme">
              Something went south during your checkout 😥
            </div>      
            <div className="flex justify-center gap-2 mt-8 py-2">
              <Link 
              href="/" 
              className="flex justify-center w-36 px-2 py-2 bg-cyan-400 rounded-2xl font-light text-xl text-theme"
              >
                Go Home
              </Link>
              <Link 
              href="https://forms.gle/sU44L37juwE593C78" 
              isExternal={true}
              className="font-light text-xl text-cyan-400"
              >
                Need help?
              </Link>
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
};