import {useTest} from "../../context/TestContext";
import TestAnswer from "./TestAnswer";
import Navigation from "./Navigation";
import React from "react";

function TestQuestion() {
    const test = useTest();
    return (
        <div className={""}>
            {test.test.questions[test.currentQuestion].image !== undefined ? (
                <>
                    <div className={"mt-2"}>
                        <h1 className={"text-3xl font-bold text-center"}>{test.test.questions[test.currentQuestion].question}</h1>
                    </div>
                    <div className={"w-auto flex justify-center"}>
                        <img src={test.test.questions[test.currentQuestion].image} alt={"bigrat"} className={"h-72"}/>
                    </div>
                </>
            ) : (
                <div className={"h-80 flex justify-center items-center"}>
                    <h1 className={"text-3xl font-bold text-center"}>{test.test.questions[test.currentQuestion].question}</h1>
                </div>
            )}


            <div className={"flex justify-center w-auto mt-4"}>
                <div className={"grid grid-cols-2 grid-rows-2 gap-2 "}>
                    <TestAnswer index={0}/>
                    <TestAnswer index={1}/>
                    <TestAnswer index={2}/>
                    <TestAnswer index={3}/>
                </div>
            </div>
            <div className={"flex justify-center w-auto mt-4"}>
                <Navigation/>
            </div>
        </div>
    );
}

export default TestQuestion;