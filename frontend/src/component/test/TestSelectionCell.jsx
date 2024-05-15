import {useTest} from "../../context/TestContext";
import React from "react";

function TestSelectionCell({index}) {
    const test = useTest();

    //selected - tone 700
    //marked - color indigo / not marked - color gray
    //correct - green / incorrect - red

    const color = (() => {
        let colorTone = 'gray';
        if (test.status() === 'COMPLETED') {
            if (test.test.answers[index].marked === -1) {
                colorTone = 'gray';
            } else if (test.test.answers[index].correct === test.test.answers[index].marked) {
                colorTone = 'green';
            } else {
                colorTone = 'red';
            }
        } else {
            if (test.test.answers[index].marked === -1) {
                colorTone = 'gray';
            } else {
                colorTone = 'indigo';
            }
        }
        return `${colorTone}-${test.currentQuestion === index ? '600' : '400'}`;
    })();

    const handleClick = () => {
        test.setCurrentQuestion(index);
    }

    return (<div
        className={`h-8 w-8 bg-${color}  text-center flex justify-center items-center rounded hover-transition cursor-pointer`}
        onClick={handleClick}>
        <span className={"font-bold text-white"}>{index + 1}</span>
    </div>);

}

export default TestSelectionCell;