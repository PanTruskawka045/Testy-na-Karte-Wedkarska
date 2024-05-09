import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useApplicationContext} from "../../context/ApplicationContext";
import {CircularProgress} from "@nextui-org/react";
import {Link, useNavigate} from "react-router-dom";
import moment from "moment";

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
                    'Authorization': `Basic ${app.getUser().authData}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 401) {
                app.logout();
                return;
            }
            setCurrentTest(response.data.currentTest);
            setTests(response.data.tests);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return (
            <div className={"flex justify-center items-center h-[calc(100vh-80px)]"}>
                <CircularProgress aria-label="Loading..."/>
            </div>
        );
    }

    return (
        <div className={"flex flex-col items-center"}>
            <h1 className={"text-2xl mt-8 font-red-hat font-semibold dark:text-white"}>Rozpoczęty test</h1>
            <TestInProgress test={currentTest}/>
            <h1 className={"text-2xl mt-8 font-red-hat font-semibold dark:text-white"}>Rozwiązane testy</h1>
            <CompletedTests tests={tests}/>
        </div>
    );
}


function TestInProgress({test}) {

    const app = useApplicationContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCreateTest = () => {
        if (loading === true) {
            return;
        }
        setLoading(true);
        (async () => {
            const response = await axios.post(`/api/user/start-test`, {}, {
                headers: {
                    'Authorization': `Basic ${app.getUser().authData}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 401) {
                app.logout();
                return;
            }
            navigate(`/test/${response.data.testId}`)
            setLoading(false);
        })();
    }

    if (test === null) {
        return (
            <div>
                <button type={"button"}
                        className={"p-2 rounded-xl bg-indigo-600 text-white px-4 font-semibold font-red-hat"}
                        onClick={handleCreateTest}>
                    <div className={"flex flex-row items-center gap-2 h-10"}>
                        <span>Rozpocznij test</span>
                        {loading && <CircularProgress aria-label="Loading..."/>}
                    </div>
                </button>
            </div>
        );
    }

    return (
        <Link to={`/test/${test.testId}`}>
            <div
                className={"w-[800px] h-16 bg-yellow-200 rounded-2xl grid grid-cols-9 items-center font-bold text-yellow-500 text-center"}>
                <div className={"col-span-3"}>
                    <span>Status: W trakcie</span>
                </div>
                <div className={"col-span-3"}>
                    <span>Rozpoczęto: </span>
                    {moment(test.startDate).calendar()}
                </div>
                <div className={"col-span-3"}>
                    <span>Wynik: ?/?</span>
                </div>
            </div>
        </Link>


    );
}

function CompletedTests({tests}){

    if(tests.length === 0){
        return (<span>Brak rozwiązanych testów</span>)
    }

}

export default AccountDashboard;