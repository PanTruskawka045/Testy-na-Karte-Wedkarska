import icon from "../../assets/logo512.png";
import React from "react";
import {useApplicationContext} from "../../context/ApplicationContext";
import {Link} from "react-router-dom";

function Header() {

    const appContext = useApplicationContext();

    return (
        <header className={"h-20 background p-4 flex flex-row items-center text-black " +
            "border-b-4 border-indigo-500"}>
            <div className={"w-12 h-12 lg:hidden"} onClick={() => appContext.setNavbarOpen(!appContext.navbarOpen)}>
                <svg viewBox="0 0 24 24" className={"w-12 h-12"}>
                    <path d="M4 18L20 18" className={"dark:stroke-white stroke-gray-900"} strokeWidth="2"
                          strokeLinecap="round"/>
                    <path d="M4 12L20 12" className={"dark:stroke-white stroke-gray-900"} strokeWidth="2"
                          strokeLinecap="round"/>
                    <path d="M4 6L20 6" className={"dark:stroke-white stroke-gray-900"} strokeWidth="2"
                          strokeLinecap="round"/>
                </svg>
            </div>
            <img src={icon} className="h-full " alt="Background"/>
            <span className={"font-bold text-2xl text-black ml-2"}>Karta Wędkarska</span>
            <div className={"p-2 ml-auto"}>
                {appContext.isUserAuthenticated() ? (
                    <span>Logged in</span>
                ) : (
                    <>
                        <Link to={"/login"} className={"link"}>Zaloguj się</Link>
                        <span>/</span>
                        <Link to={"/register"} className={"link"}>Zarejestruj się</Link>
                    </>

                    // <span>Login</span>
                )}
                {/*TODO login or register*/}
            </div>
        </header>
    );
}

export default Header;