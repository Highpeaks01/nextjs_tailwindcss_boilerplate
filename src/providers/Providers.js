"use client"


import {HeroUIProvider} from "@heroui/react"
import { ThemeProvider } from "./ThemeProvider"
import LanguageProvider from "./LanguageProvider"
import { UserProvider } from "./UserProvider"
import { ShopProvider } from "./ShopProvider"
import {ToastProvider} from "@heroui/toast";


export default function Providers({children}) {
  return (
    <HeroUIProvider>
      <ThemeProvider>
          <LanguageProvider>
            <UserProvider>
              <ShopProvider>
              <ToastProvider />
                {children}
              </ShopProvider>
            </UserProvider>
          </LanguageProvider>
      </ThemeProvider>
    </HeroUIProvider>
  )
}