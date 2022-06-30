import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserResearcher } from "./user-researcher/UserResearcher";
import { InteractionDesigner } from "./interaction-designer/InteractionDesigner";
import { ContentSpecialist } from "./content-specialist/ContentSpecialist";
import { CreativeDeveloper } from "./creative-developer/CreativeDeveloper";
import { Home } from "./Home";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="grow flex-auto">
        <Routes>
          <Route path="content" element={<ContentSpecialist />} />
          <Route path="developer" element={<CreativeDeveloper />} />
          <Route
            path="interaction-designer"
            element={<InteractionDesigner />}
          />
          <Route path="user-researcher" element={<UserResearcher />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="bg-gray-50 px-2 place-content-center flex">
        <a
          href="https://github.com/meesvandongen/ux-role-determinator"
          target="_blank"
          className="text-gray-400 p-2 text-sm font-light uppercase"
          rel="noreferrer"
        >
          Powered by ilionx
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
