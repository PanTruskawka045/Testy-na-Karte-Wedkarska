import {useApplicationContext} from "../../context/ApplicationContext";
import {useState} from 'react';
import axios from 'axios';
import {Link, Navigate} from "react-router-dom";
import logo from "../../assets/logo512.png";

function Login() {

    const app = useApplicationContext();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)

    if (app.isUserAuthenticated()) {
        return <Navigate to={'/account'}/>
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`/api/auth/login`, {username, password}, {
                headers: {'Content-type': 'application/json'}
            }
        )
        if (response.status !== 200) {
            setIsError(true)
            return
        }
        const authData = window.btoa(username + ':' + password)
        const authenticatedUser = {authData, ...response.data}
        app.setUser(authenticatedUser);
    }

    return (
        <div className={"flex justify-center items-center h-[calc(100vh-80px)]"}>
            <div className={"rounded-2xl overflow-hidden border-indigo-200 border-2"}>
                <div className={"flex flex-row"}>
                    <img src={logo} alt={"Logo"} className={"h-[600px]"}/>
                    <form onSubmit={handleSubmit} className={"ml-20 w-80 flex flex-col mr-20 mt-10"}>
                        {isError ? <div className={"bg-red-200 p-2 rounded-2xl text-red-800"}>Błąd logowania</div> : ""}
                        <label className={"mr-2 text-gray-800 pt-8"}>Login</label>
                        <input className={`
                            bg-gray-50 placeholder-gray-200 p-2 px-4 rounded-2xl 
                            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 focus:bg-gray-100
                            text-gray-600
                        `}
                               placeholder={"Email"}
                               type={"email"} onChange={(event) => setUsername(event.target.value)}/>
                        <label className={"mr-2 text-gray-800 pt-8"}>Hasło</label>
                        <input className={`
                            bg-gray-50 placeholder-gray-200 p-2 px-4 rounded-2xl 
                            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 focus:bg-gray-100
                            text-gray-600
                        `}
                               placeholder={"Hasło"}
                               type={"password"} onChange={(event) => setPassword(event.target.value)}/>
                        <button type={"submit"} className={`
                            rounded-2xl mt-8 bg-indigo-500 text-white p-2 px-4 hover-transition
                        `}>Login
                        </button>

                        <Link to={"/register"} className={"text-center mt-2 link"}>Stwórz konto</Link>

                    </form>
                </div>
            </div>
        </div>
    );

}

export default Login;