import {createContext, useContext, useState} from "react";
import useLocalStorage from "../hook/useLocalStorage";

const ApplicationContext = createContext(undefined);

export function ApplicationContextProvider({children}) {

    const [user, setUser] = useLocalStorage("user", null);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const isUserAuthenticated = () => {
        return user !== null;
    }

    const logout = () => {
        setUser(null)
    }

    const getUser = () => {
        return user;
    }


    return (
        <ApplicationContext.Provider
            value={{getUser, setUser, isUserAuthenticated, logout, navbarOpen, setNavbarOpen}}>
            {children}
        </ApplicationContext.Provider>
    );
}

export function useApplicationContext() {
    return useContext(ApplicationContext)
}

export default ApplicationContext;