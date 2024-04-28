import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useApplicationContext} from "../../context/ApplicationContext";


function AccountDashboard() {

    const app = useApplicationContext();
    const [loading, setLoading] = useState(true);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get('api/user/tests', {
                validateStatus: () => true,
                headers: {
                    'Authorization': `Basic ${app.getUser().authData}`
                }
            });
            if (response.status === 401) {
                app.logout();
                return;
            }
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            <h1>Submitted tests</h1>
        </div>
    );
}

export default AccountDashboard;