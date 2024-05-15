import {useTest} from "../../context/TestContext";
import {useApplicationContext} from "../../context/ApplicationContext";
import axios from "axios";
import React from "react";

function TestAnswer({index}) {

    const test = useTest();
    const app = useApplicationContext();

    const letter = (index) => {
        switch (index) {
            case 0:
                return "A";
            case 1:
                return "B";
            case 2:
                return "C";
            case 3:
                return "D";
            default:
                return "A";
        }
    }

    const color = (() => {
        if (test.status() === 'COMPLETED') {

            if (test.test.answers[test.currentQuestion].correct === index) {
                return "green-500";
            }
            if (test.test?.answers[test.currentQuestion]?.marked === index) {
                return "red-500";
            }
            return "gray-400";

        }

        if (test.test?.answers[test.currentQuestion]?.marked === index) {
            return "indigo-400";
        }
        return "gray-400";
    })();

    const handleClick = () => {
        if (test.status() === 'COMPLETED') {
            return;
        }

        if (test.getAnswer() === index) {
            test.setAnswer(-1);
            (async () => {
                await axios.post("/api/test/unmark-answer", {
                    testId: test.test.testId,
                    questionId: test.currentQuestion
                }, {
                    headers: {
                        'Authorization': `Basic ${app.getUser().authData}`
                    }

                })
            })();
            return;
        }
        test.setAnswer(index);
        (async () => {
            await axios.post("/api/test/mark-answer", {
                testId: test.test.testId,
                questionId: test.currentQuestion,
                markedAnswer: index
            }, {
                headers: {
                    'Authorization': `Basic ${app.getUser().authData}`
                }

            })
        })();
    }

    return (
        <div
            className={`bg-${color} w-72 h-20 text-wrap rounded-xl flex justify-center items-center p-4 hover-transition cursor-pointer`}
            onClick={handleClick}>
            <span>{letter(index)}. {test.test?.questions[test.currentQuestion].answers[index]}</span>
        </div>
    );
}

export default TestAnswer;