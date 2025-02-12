"use client"

import ClientConfig from "@/components/client.config"
import { Button, Image, Link } from "@heroui/react"
import { FaArrowUp } from "react-icons/fa"

export default function Hero({}){

    return(
        <div className="flex flex-col justify-center items-center px-8">
            <Button 
            className="my-8 px-4 py-2 border-1 rounded-xl animate-pulse"
            >
                Only 5 free-lifetime plans left
            </Button>
            <div className="relative flex flex-col h-auto w-4/5 items-center justify-center px-4 border-1 rounded-xl>">
                
                {/* Outward-pointing Triangle corner protectors */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-l-[10px] border-t-gray-800 border-l-transparent"></div> {/* Top Left */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[10px] border-r-[10px] border-t-gray-800 border-r-transparent"></div> {/* Top Right */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[10px] border-l-[10px] border-b-gray-800 border-l-transparent"></div> {/* Bottom Left */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[10px] border-r-[10px] border-b-gray-800 border-r-transparent"></div> {/* Bottom Right */}

                <div className="p-20 relative mx-auto max-w-[1200px] text-center">
                    <div className="mb-7 inline-flex items-center">
                        <span className="text-base">BETA 1.5 AVAILABLE NOW</span>
                    </div>

                    <h1 className="mb-2 md:text-7xl text-3xl font-semibold tracking-tight">
                        {ClientConfig.appHeadline}
                    </h1>

                    <p className="mb-8 text-xl">
                        {ClientConfig.appTitle}
                    </p>

                    <Button className="h-14 rounded-lg bg-green-300 px-6 text-lg font-medium hover:bg-green-400 inline-flex items-center justify-center group transition-transform duration-300">
                        <Link isExternal={true} href="https://forms.gle/KhcPLSqJjVxENzEK8" className=" text-theme font-medium leading-5 mr-2">
                            Get in the loop
                        </Link>
                        <div className="w-[34px] h-[34px] font-bold bg-[#68CC58] rounded-md flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-1">
                            <FaArrowUp className="w-6 h-6" />
                        </div>
                    </Button>

                    <div className="relative flex text-center justify-center mt-4">
                        <p className="font-light">Available now</p>
                        <span className="relative flex size-3">
                            <span className="absolute top-0 right-0 inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="absolute top-0 right-0 inline-flex size-3 rounded-full bg-emerald-500"></span>
                        </span>
                    </div>

                    <div className="absolute -bottom-60 -left-48 -z-10">
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