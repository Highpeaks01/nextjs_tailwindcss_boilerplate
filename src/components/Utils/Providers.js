import {HeroUIProvider} from "@heroui/react"
import { ThemeProvider } from "./Theme"

export default function Providers({children}) {
  return (
    <HeroUIProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  )
}