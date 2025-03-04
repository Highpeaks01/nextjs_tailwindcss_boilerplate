'use client';


import { IoMoonSharp, IoSunnySharp } from "react-icons/io5"
import { Button } from "@heroui/react"
import { useTheme } from "../../providers/ThemeProvider";


export default function ThemeSwitcher({}){

    const { theme, toggleTheme } = useTheme()

    return(
            <Button
                defaultSelected
                isSelected={theme === "dark"} 
                onPress={toggleTheme}
                className="text-xl bg-transparent rounded-full"
                endContent={theme === "dark" ? <IoMoonSharp  /> : <IoSunnySharp />}
                size="sm"
          />
    )
}