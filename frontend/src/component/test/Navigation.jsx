import {useTest} from "../../context/TestContext";
import ArrowTriangle from "../svg/ArrowTriangle";
import React from "react";

function Navigation() {

    const test = useTest();

    const next = () => {
        if (test.currentQuestion < (test.test.questions.length - 1)) {
            test.setCurrentQuestion(test.currentQuestion + 1);
        }
    }

    const previous = () => {
        if (test.currentQuestion > 0) {
            test.setCurrentQuestion(test.currentQuestion - 1);
        }
    }

    return (<div className={"w-auto flex justify-center mt-2"}>
        <div className={"grid grid-cols-2 gap-2"}>
            <div
                onClick={previous}
                className={`flex flex-col justify-center hover-transition cursor-pointer ${test.currentQuestion <= 0 ? "text-gray-500 fill-gray-500" : "text-indigo-500 fill-indigo-500"}`}>
                <ArrowTriangle rotate={"rotate-[270deg]"}/>
                <span className={"font-red-hat"}>Poprzednie Pytanie</span>
            </div>
            <div
                onClick={next}
                className={`flex flex-col justify-center hover-transition cursor-pointer ${test.currentQuestion >= (test.test.questions.length - 1) ? "text-gray-500 fill-gray-500" : "text-indigo-500 fill-indigo-500"}`}>
                <ArrowTriangle rotate={"rotate-90"}/>
                <span className={"font-red-hat"}>Następne Pytanie</span>
            </div>
        </div>
    </div>);
}

export default Navigation;