"use client"


import { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    const toggleTheme = () => {
        console.log("toggleTheme")
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}