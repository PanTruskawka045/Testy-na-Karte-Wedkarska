import React, {useState} from "react";
import {useApplicationContext} from "../../context/ApplicationContext";
import {useTest} from "../../context/TestContext";
import axios from "axios";
import {CircularProgress} from "@nextui-org/react";

function FinishTest() {

    const [loading, setLoading] = useState(false);
    const app = useApplicationContext();
    const test = useTest();

    const handleSubmitTest = () => {
        if (loading === true) {
            return;
        }
        setLoading(true);
        (async () => {
            const response = await axios.post("/api/test/finish", {
                testId: test.test.testId
            }, {
                validateStatus: () => true,
                headers: {
                    'Authorization': `Basic ${app.getUser().authData}`
                }
            })
            if (response.status === 200) {
                test.setTestData(response.data.test);
            }
            setLoading(false);

        })();
    }

    return (
        <div className={"w-auto flex justify-center mt-2"}>
            <button type={"button"}
                    className={"p-2 rounded-xl bg-indigo-600 text-white px-4 font-semibold font-red-hat"}
                    onClick={handleSubmitTest}>
                <div className={"flex flex-row items-center gap-2 h-10"}>
                    <span>Zakończ test</span>
                    {loading && <CircularProgress aria-label="Loading..."/>}
                </div>
            </button>
        </div>
    )
}

export default FinishTest;