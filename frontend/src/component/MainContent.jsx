import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import MainPage from "./MainPage";
import AccountDashboard from "./account/AccountDashboard";
import RequiredAuthentication from "./auth/RequiredAuthentication";

function MainContent() {

    return (
        <div className={"w-full flex justify-center"}>
            <div className={"h-screen pt-20 mx-4"}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route index element={<MainPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/account" element={
                        <RequiredAuthentication>
                            <AccountDashboard/>
                        </RequiredAuthentication>
                        }/>
                    <Route path="*" element={<Navigate to={"/"}/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default MainContent;