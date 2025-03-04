"use client";

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Script from 'next/script';
import Confetti from 'react-confetti';
import { Link } from "@heroui/react";
import { useUser } from '../../../providers/UserProvider';

export default function Success({}) {
  const searchParams = useSearchParams();
  const { userData, getUserData } = useUser();
  const fetched = useRef(false)

  useEffect(() => {
    // Fetch session_id from URL query params
    const fetchSession = async () => {

      console.log(searchParams.toString());

      const session_id = searchParams.get('session_id');

      if (!session_id) return;

      console.log("session id:", session_id);

      // Fetch session from backend
      const response = await fetch(`http://localhost:3001/api/v1/subs/get/${session_id}`);
      const sessionData = await response.json();

      console.log('Subscription successful', sessionData);

      return await getUserData(userData?.uid, userData?.email);

    };

    if(searchParams && userData && !fetched.current){
      fetchSession();
      fetched.current = true
    }

  }, [searchParams, userData]); // Ensure effect runs when searchParams change

  const [windowDimensions, setWindowDimensions] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateWindowDimensions);
    updateWindowDimensions();

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const colorsArray = ['#FAFF00', '#FF00D5', '#C99FFF', '#AF9FFF', '#68FF00', '#87E0FF'];

  return (
    <>
      <Head>
        <title>Congratulations - Callmaze</title>
      </Head>
      <main>
        {/* Google Analytics Conversion Tracking */}
        <Script id="google-analytics-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion_congratulations', {
                'send_to': '-',
                'value': 1.0,
                'currency': 'USD',
                'transaction_id': ''
            });
          `}
        </Script>

        {windowDimensions.width > 10 && (
          <Confetti width={windowDimensions?.width} height={1600} colors={colorsArray} />
        )}

        <div className='flex flex-col justify-center text-theme my-24'>
          <div className="container mx-auto px-4 py-8 mb-6 text-center">
            <div className="text-4xl md:text-8xl mb-4 font-semibold text-theme">
              Congratulations! 🎉
            </div>
            <div className="text-4xl md:text-6xl mb-4 font-medium">
              You did it! 🥳
            </div>
            <div className="text-xl md:text-2xl mb-4 font-light text-theme">
              Enjoy your new hints.
            </div>
            <div className="flex justify-center gap-2 mt-8 py-2">
              <Link href="/" className="flex justify-center w-36 px-2 py-2 bg-cyan-400 rounded-2xl font-light text-xl text-theme">
                Go Home
              </Link>
              <Link href="https://forms.gle/sU44L37juwE593C78" isExternal={true} className="font-light text-xl text-cyan-400">
                Need help?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
