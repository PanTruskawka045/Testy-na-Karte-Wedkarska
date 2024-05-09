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
        <header className={`h-20 background p-4 flex flex-row items-center text-black bg-white dark:bg-gray-700 
        border-b-4 border-indigo-500`}>
            <img src={icon} className="h-full rounded-md" alt="Background"/>
            <Link to={"/"}>
                <span className={"font-bold text-2xl text-black dark:text-white ml-2 hover-transition"}>Karta Wędkarska</span>
            </Link>
            <div className={"p-2 ml-auto flex flex-row items-center gap-4"}>
            <DayNightToggle
                    onChange={() => {
                        appContext.toggleTheme();
                    }}
                    checked={appContext.theme === "dark"}
                />

                {appContext.isUserAuthenticated() ? (
                    <>
                        <Link to={"/account"}>
                            <span className={"font-semibold dark:text-white hover-transition"}>{appContext.getUser().name}</span>
                        </Link>
                        <button type={"button"}
                                className={"p-2 rounded-xl bg-indigo-600 text-white px-4 font-semibold font-red-hat"}
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