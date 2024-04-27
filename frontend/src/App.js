import {BrowserRouter} from "react-router-dom";
import {ApplicationContextProvider} from "./context/ApplicationContext";
import Header from "./component/navigation/Header";
import MainContent from "./component/MainContent";

function App() {
    return (
        <BrowserRouter>
            <ApplicationContextProvider>
                <div className={"fixed w-screen"}>
                    <Header/>
                </div>
                <MainContent/>
            </ApplicationContextProvider>
        </BrowserRouter>
    );
}

export default App;
