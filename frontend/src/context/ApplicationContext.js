import {createContext, useContext, useEffect, useState} from "react";
import useLocalStorage from "../hook/useLocalStorage";

const ApplicationContext = createContext(undefined);

export function ApplicationContextProvider({children}) {

    const [user, setUser] = useLocalStorage("user", null);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const isUserAuthenticated = () => {
        return user !== null;
    }

    const logout = () => {
        setUser(null)
    }

    const getUser = () => {
        return user;
    }

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <ApplicationContext.Provider
            value={{getUser, setUser, isUserAuthenticated, logout, navbarOpen, setNavbarOpen, theme, toggleTheme}}>
            {children}
        </ApplicationContext.Provider>
    );
}

export function useApplicationContext() {
    return useContext(ApplicationContext)
}

export default ApplicationContext;