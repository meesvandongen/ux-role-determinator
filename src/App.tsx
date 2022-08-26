import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UxResearch} from "./ux-research/UxResearch";
import {UxDesign} from "./ux-design/UxDesign";
import {UxWriting} from "./ux-writing/UxWriting";
import {UxDevelopment} from "./ux-development/UxDevelopment";
import {Home} from "./Home";
import {UxManaging} from "./ux-managing/UxManaging";
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
