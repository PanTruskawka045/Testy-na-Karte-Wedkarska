import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useApplicationContext} from "../../context/ApplicationContext";


function AccountDashboard() {

    const app = useApplicationContext();
    const [loading, setLoading] = useState(true);
    const [tests, setTests] = useState([]);
    const [currentTest, setCurrentTest] = useState(null);
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
            console.log(response.data)
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            <h1 className={"text-2xl mt-8 font-red-hat font-semibold dark:text-white"}>Rozpoczęty test</h1>
            <TestInProgress test={currentTest}/>
            <h1 className={"text-2xl mt-8 font-red-hat font-semibold dark:text-white"}>Rozwiązane testy</h1>
        </div>
    );
}


function TestInProgress({test}){
    const [loading, setLoading] = useState(false);

    const handleCreateTest = () => {
        setLoading(true);
        (async () => {

        })();
    }

    if(test === null){

    }
}
export default AccountDashboard;