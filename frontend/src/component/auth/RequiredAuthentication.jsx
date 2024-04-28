import React from "react";
import {useApplicationContext} from "../../context/ApplicationContext";
import {Navigate} from "react-router-dom";

function RequiredAuthentication({children}) {
    const app = useApplicationContext();
    if (!app.isUserAuthenticated()) {
        return <Navigate to={'/login'}/>;
    }
    return children;
}

export default RequiredAuthentication;