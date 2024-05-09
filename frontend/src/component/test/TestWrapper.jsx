import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";
import TestView from "./TestView";
import {TestContextProvider} from "../../context/TestContext";
function TestWrapper() {

    const {testId} = useParams();
    const [test, setTest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);



    useEffect(() => {
        if(true) return;
        (async () => {
            const response = await axios.get(`/api/test/details?testId=${testId}`, {
                validateStatus: () => true
            })
            if(response.status !== 200){
                setError(true)
            }
        })();
    }, []);

    if(error){
        return (<Navigate to={'/account'}/>);
    }

    if(loading && false){
        //TODO return loading spinner (jak sie komputer naprawi)
        return <div></div>;
    }

    return (
        <TestContextProvider test={test}>
            <TestView/>
        </TestContextProvider>

    );

}

export default TestWrapper;