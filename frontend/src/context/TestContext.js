import {createContext, useContext, useState} from "react";

const TestContext = createContext(undefined);

export function TestContextProvider({testData, children}) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [test, setTest] = useState(testData);

    return (
            <TestContext.Provider
            value={{currentQuestion, setCurrentQuestion, test, setTest}}>
            {children}
        </TestContext.Provider>
    );

}

export function useTest() {
    return useContext(TestContext)
}
