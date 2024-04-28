import {useState} from "react";
import {useApplicationContext} from "../../context/ApplicationContext";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo512.png";

function Register() {

    const app = useApplicationContext();

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    if (app.isUserAuthenticated()) {
        return <Navigate to={'/account'}/>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        (async () => {
            const response = await axios.post(`/api/auth/register`, {username, password, email, name}, {
                    headers: {'Content-type': 'application/json'},
                    validateStatus: () => true
                }
            ).catch((e) => {
                console.log(e);
            })
            if (response.status !== 200) {
                if (response.status === 409) {
                    if (response.data.internalCode === 0x02) {
                        setError("Użytkownik o podanej nazwie już istnieje")
                        return;
                    }
                    if (response.data.internalCode === 0x03) {
                        setError("Użytkownik o podanym adresie email już istnieje")
                        return;
                    }
                }

                setError("Wystąpił błąd")
                return
            }
            const authData = window.btoa(username + ':' + password)
            const authenticatedUser = {authData, ...response.data}
            app.setUser(authenticatedUser);
        })();
    }

    return (
        <div className={"flex justify-center items-center h-[calc(100vh-80px)]"}>
            <div className={"rounded-2xl overflow-hidden border-indigo-200 border-2"}>
                <div className={"flex flex-row"}>
                    <img src={logo} alt={"Logo"} className={"h-[600px]"}/>
                    <form onSubmit={handleSubmit} className={"ml-20 w-80 flex flex-col mr-20"}>
                        {error ? <div className={"bg-red-200 p-2 rounded-2xl text-red-800"}>{error}</div> : ""}
                        <label className={"mr-2 text-gray-800 pt-8"}>Email</label>
                        <input className={`
                            bg-gray-50 placeholder-gray-200 p-2 px-4 rounded-2xl 
                            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 focus:bg-gray-100
                            text-gray-600
                        `}
                               placeholder={"Email"}
                               type={"email"} onChange={(event) => setEmail(event.target.value)}/>

                        <label className={"mr-2 text-gray-800 pt-8"}>Imię</label>
                        <input className={`
                            bg-gray-50 placeholder-gray-200 p-2 px-4 rounded-2xl 
                            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 focus:bg-gray-100
                            text-gray-600
                        `}
                               placeholder={"Imię"}
                               type={"text"} onChange={(event) => setName(event.target.value)}/>

                        <label className={"mr-2 text-gray-800 pt-8"}>Nazwa Użytkownika</label>
                        <input className={`
                            bg-gray-50 placeholder-gray-200 p-2 px-4 rounded-2xl 
                            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 focus:bg-gray-100
                            text-gray-600
                        `}
                               placeholder={"Nazwa Użytkownika"}
                               type={"text"} onChange={(event) => setUsername(event.target.value)}/>


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
                        `}>Zarejestruj się
                        </button>
                        <Link to={"/login"} className={"text-center mt-2 link"}>Zaloguj się</Link>

                    </form>
                </div>
            </div>
        </div>
    );


}

export default Register;