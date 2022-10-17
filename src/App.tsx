import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UxResearch} from "./pages/UxResearch/UxResearch";
import {UxDesign} from "./pages/UxDesign/UxDesign";
import {UxWriting} from "./pages/UxWriting/UxWriting";
import {UxDevelopment} from "./pages/UxDevelopment/UxDevelopment";
import {Home} from "./pages/Home/Home";
import {UxManaging} from "./pages/UxManaging/UxManaging";
import ScrollToTop from "./components/ScrollToTop";
import {GlobalStyles} from "./styles/global.styles";
import {Footer} from "./components/footer/Footer";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <ScrollToTop/>
            <Routes>
                <Route path="writing" element={<UxWriting/>}/>
                <Route path="development" element={<UxDevelopment/>}/>
                <Route path="design" element={<UxDesign/>}/>
                <Route path="research" element={<UxResearch/>}/>
                <Route path="managing" element={<UxManaging/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
