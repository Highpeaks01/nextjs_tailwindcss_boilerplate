"use client"

//Next React


//Hero UI
import {
    Link,
    Button,
  } from "@heroui/react"

//Icons
import ClientConfig from "@/components/client.config"
import LanguageSwitcher from "./LanguageSwitcher"
import ThemeSwitcher from "./ThemeSwitcher"


export default function AppNavbar () {

    return (
      <div className="flex justify-center pt-8">
        <div className="flex w-4/5 h-12 justify-around items-center rounded-full bg-gradient-to-r from-lime-300 via-emerald-200 to-green-400">
          <div className="flex items-center justify-start">
            <p className="xs:hidden sm:block font-bold text-inherit">{ClientConfig.appName}</p>
          </div>
          <div className="text-theme flex gap-3">
            <Link className="text-theme" href="#faqs">
              FAQS
            </Link>
            <Link className="text-theme" href="#benefits">
              BENEFITS
            </Link>
            <Link className="text-theme" href="#features">
              FEATURES
            </Link>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button 
              as={Link}
              isExternal={true}
              href="https://forms.gle/KhcPLSqJjVxENzEK8"
              className="px-6 py-3 rounded-full bg-gradient-to-bl from-violet-200 to-gray-800"
            >
              <p className="font-light">Get updates</p>
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    )
}