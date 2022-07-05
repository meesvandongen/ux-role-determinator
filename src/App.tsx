import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UxResearch } from "./ux-research/UxResearch";
import { UxDesign } from "./ux-design/UxDesign";
import { UxWriting } from "./ux-writing/UxWriting";
import { UxDevelopment } from "./ux-development/UxDevelopment";
import { Home } from "./Home";
import { UxManaging } from "./ux-managing/UxManaging";
import ScrollToTop from "./components/ScrollToTop";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex-auto grow">
        <Routes>
          <Route path="writing" element={<UxWriting />} />
          <Route path="development" element={<UxDevelopment />} />
          <Route path="design" element={<UxDesign />} />
          <Route path="research" element={<UxResearch />} />
          <Route path="managing" element={<UxManaging />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="flex place-content-center bg-gray-50 px-2">
        <a
          href="https://github.com/meesvandongen/ux-role-determinator"
          target="_blank"
          className="p-2 text-sm font-light uppercase text-gray-400"
          rel="noreferrer"
        >
          Powered by ilionx
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
