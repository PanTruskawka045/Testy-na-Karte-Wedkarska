import {createContext, useContext, useEffect, useState} from "react";

const TestContext = createContext(undefined);

export function TestContextProvider({testData, children}) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [test, setTest] = useState();

    useEffect(() => {
        setTest(testData);
    }, []);

    const getAnswer = () => {
        return test.answers[currentQuestion].marked;
    }

    const setAnswer = (answer) => {
        setTest((prevState) => {
            const newState = {...prevState};
            newState.answers[currentQuestion].marked = answer;
            return newState;
        })
    }

    const status = () => test.testStatus;

    const setTestData = (data) => {
        setTest(data);
    }

    return (
        <TestContext.Provider
            value={{currentQuestion, setCurrentQuestion, test, setTestData, getAnswer, setAnswer, status}}>
            {test !== undefined && children}
        </TestContext.Provider>
    );

}

export function useTest() {
    return useContext(TestContext)
}
