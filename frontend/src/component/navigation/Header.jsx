import icon from "../../assets/logo512.png";
import React from "react";
import {useApplicationContext} from "../../context/ApplicationContext";
import DayNightToggle from 'react-day-and-night-toggle';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header() {

    const appContext = useApplicationContext();

    const handleLogout = () => {
        appContext.logout();
    }

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
            <img src={icon} className="h-full rounded-md" alt="Background"/>
            <span className={"font-bold text-2xl text-black ml-2"}>Karta Wędkarska</span>
            <div className={"p-2 ml-auto"}>
                <DayNightToggle
                    onChange={() => {
                        appContext.toggleTheme();
                    }}
                    checked={theme === "dark"}
                />

                {appContext.isUserAuthenticated() ? (
                    <>
                        <Link to={"/account"}>
                            <span className={"font-semibold"}>{appContext.getUser().name}</span>
                        </Link>
                        <button type={"button"}
                                className={"ml-2 p-2 rounded-xl bg-indigo-600 text-white px-4 font-semibold font-red-hat"}
                                onClick={handleLogout}>Wyloguj się
                        </button>
                    </>
                ) : (
                    <Link to={"/login"}>
                        <div className={"p-2 rounded-xl bg-indigo-600 text-white px-4 font-semibold font-red-hat "}>
                            <FontAwesomeIcon icon="fa-solid fa-right-to-bracket"/> <span>Zaloguj się</span>
                        </div>
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;