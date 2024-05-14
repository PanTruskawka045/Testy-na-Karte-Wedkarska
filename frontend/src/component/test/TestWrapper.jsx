import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";
import TestView from "./TestView";
import {TestContextProvider} from "../../context/TestContext";
import {useApplicationContext} from "../../context/ApplicationContext";
function TestWrapper() {

    const app = useApplicationContext();

    const {testId} = useParams();
    const [test, setTest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);



    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/test/details?testId=${testId}`, {
                validateStatus: () => true,
                headers: {
                    'Authorization': `Basic ${app.getUser().authData}`
                }
            })
            setLoading(false);
            if(response.status !== 200){
                setError(true)
            }
            setTest(response.data);
        })();
    }, []);

    if(error){
        return (<Navigate to={'/account'}/>);
    }



    if(loading  || test === undefined){
        //TODO return loading spinner (jak sie komputer naprawi)
        return <div></div>;
    }

    return (
        <TestContextProvider testData={test}>
            <TestView/>
        </TestContextProvider>

    );

}

export default TestWrapper;