import {useTest} from "../../context/TestContext";
import React from "react";
import FinishTest from "./FinishTest";
import TestQuestion from "./TestQuestion";
import TestSelectionCell from "./TestSelectionCell";

function TextView() {
    const test = useTest();

    return (
        <div>
            <div className={"w-auto mt-3 flex justify-center flex-wrap gap-1"}>
                {test?.test?.answers.map((answer, index) => {
                    return <TestSelectionCell index={index}/>
                })}
            </div>
            {test.status() === 'IN_PROGRESS' && <FinishTest/>}
            <TestQuestion/>
        </div>

    )
}


export default TextView;
