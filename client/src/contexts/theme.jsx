import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({
    children,
}) {
    const [theme,setTheme] = useState("dark")

    const toggleTheme = () => {
        (theme === "light" ? setTheme("dark") : setTheme("light"))
      }

    return (
        <ThemeContext.Provider value = {{theme, setTheme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext)