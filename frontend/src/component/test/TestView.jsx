import {useTest} from "../../context/TestContext";
import axios from "axios";
import {useApplicationContext} from "../../context/ApplicationContext";
import {CircularProgress} from "@nextui-org/react";
import React, {useState} from "react";
import ArrowTriangle from "../svg/ArrowTriangle";

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
                        <img src={"https://bigrat.monster/media/bigrat.jpg"} alt={"bigrat"} className={"h-72"}/>
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

            console.log(response.data);

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

export default TextView;
