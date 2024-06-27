import background from "../assets/jezioro-pelne-ryb.jpg";


function MainPage() {

    return (
        <div className={"text-xxl text-center font-red-hat dark:text-white "}>
            <h1 className={"font-bold text-9xl pt-20"}>TESTY NA KARTĘ WĘDKARSKĄ</h1>

            <img src={background} alt={"rybki"} className={"w-full pt-6 overflow-hidden"}/>
        </div>
    )

}

export default MainPage;