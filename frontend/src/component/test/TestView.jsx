import {useTest} from "../../context/TestContext";

function TextView() {
    const test = useTest();

    return (
        <div>
            <div className={"w-screen mt-3 flex justify-center flex-wrap gap-1"}>
                <TestSelectionCell index={1}/>
                <div className={"h-8 w-8 bg-gray-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-700 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded cursor-pointer"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>
                <div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded"}>
                    <span className={"font-bold text-white"}>100</span>
                </div>

            </div>

            <TestQuestion/>
        </div>

    )
}

function TestSelectionCell({index}) {
    const test = useTest();

    const handleClick = () => {
        test.setCurrentQuestion(index);
    }

    return (<div className={"h-8 w-8 bg-indigo-400 text-center flex justify-center items-center rounded hover-transition cursor-pointer"} onClick={handleClick}>
        <span className={"font-bold text-white"}>{index}</span>
    </div>);

}

function TestQuestion() {
    const test = useTest();

    return (
        <div className={""}>
            <div className={"mt-2"}>
                <h1 className={"text-3xl font-bold text-center"}>Testowe pytanie</h1>
            </div>
            <div className={"w-screen flex justify-center"}>
                <img src={"https://bigrat.monster/media/bigrat.jpg"} alt={"bigrat"} className={"h-72"}/>
            </div>
            {/*<div className={"h-96 flex justify-center items-center"}>*/}
            {/*        <h1 className={"text-3xl font-bold text-center"}>Testowe pytanie</h1>*/}
            {/*</div>*/}
            <div className={"flex justify-center w-screen mt-4"}>
                <div className={"grid grid-cols-2 grid-rows-2 gap-2 "}>
                    <TestAnswer index={0}/>
                    <TestAnswer index={1}/>
                    <TestAnswer index={2}/>
                    <TestAnswer index={3}/>
                </div>
            </div>
            <div className={"flex justify-center w-screen mt-4"}>
                <Navigation/>
            </div>
        </div>
    );
}

function TestAnswer({index}){
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

    const handleClick = () => {

    }

    return (
        <div className={"bg-red-200 w-72 h-20 text-wrap rounded-xl flex justify-center items-center p-4 hover-transition"} onClick={handleClick}>
            <span>{letter(index)}. Testowa odpowiedź 1 asdasdasdasdas dasd asd asdas </span>
        </div>
    );
}

function Navigation() {

}

export default TextView;
