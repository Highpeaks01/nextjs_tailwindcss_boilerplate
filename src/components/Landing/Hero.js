"use client"

import ClientConfig from "@/components/client.config"
import { Button, Image, Link } from "@heroui/react"
import { FaArrowRight, FaArrowUp } from "react-icons/fa"
import { useLanguage } from "../providers/LanguageProvider"

export default function Hero({}) {

    const { locale } = useLanguage()

    return (
        <div className="flex flex-col justify-center items-center px-4 sm:px-8">
            <Button 
                as={Link}
                isExternal={true}
                href={"https://app.callvize.com"}
                className="flex gap-2 my-6 sm:my-8 px-4 py-2 border-1 rounded-xl animate-pulse"
            >
                Announcing integration with Microsoft Teams
                <FaArrowRight />
            </Button>
            
            <div className="relative flex flex-col w-full sm:w-4/5 items-center justify-center px-4 py-6 sm:px-8 border-1 rounded-xl">
                
                {/* Outward-pointing Triangle corner protectors */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-l-[10px] border-t-gray-800 border-l-transparent"></div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[10px] border-r-[10px] border-t-gray-800 border-r-transparent"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[10px] border-l-[10px] border-b-gray-800 border-l-transparent"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[10px] border-r-[10px] border-b-gray-800 border-r-transparent"></div>

                <div className="flex flex-col justify-center p-6 sm:p-20 relative mx-auto text-center">
                    <div className="mb-4 sm:mb-7 inline-flex items-center">
                        <span className="text-sm sm:text-base">BETA 1.5 AVAILABLE NOW</span>
                    </div>

                    <h1 className="mb-2 sm:text-7xl text-3xl font-semibold tracking-tight">
                        {ClientConfig.appHeadline}
                    </h1>

                    <p className="mb-8 sm:text-xl text-lg">
                        {ClientConfig.appTitle}
                    </p>

                    <Button className="h-12 sm:h-14 rounded-lg bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-500 px-6 sm:text-lg text-base font-medium hover:bg-green-400 inline-flex items-center justify-center group transition-transform duration-300">
                        <Link isExternal={true} href="https://app.callvize.com" className="text-theme font-medium leading-5 mr-2">
                            Let AI drive your speech
                        </Link>
                        <div className="w-[30px] sm:w-[34px] h-[30px] sm:h-[34px] font-bold bg-gray-800 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-1">
                            <FaArrowUp className="w-5 sm:w-6 h-5 sm:h-6" />
                        </div>
                    </Button>

                    <div className="relative flex text-center justify-center mt-4">
                        <p className="font-semibold">Available now</p>
                        <span className="relative flex size-3">
                            <span className="absolute top-0 right-0 inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                            <span className="absolute top-0 right-0 inline-flex size-3 rounded-full bg-sky-500"></span>
                        </span>
                    </div>

                    <div className="absolute -bottom-36 sm:-bottom-60 -left-24 sm:-left-48 -z-10">
                        <Image
                            src="/images/dotted-pattern.png"
                            alt="Dotted Pattern"
                            width={600}
                            height={600}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
