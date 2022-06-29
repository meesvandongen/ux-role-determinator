import React from "react";
import { TopBar } from "./components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserResearcher } from "./user-researcher/UserResearcher";
import { InteractionDesigner } from "./interaction-designer/InteractionDesigner";
import { ContentSpecialist } from "./content-specialist/ContentSpecialist";
import { CreativeDeveloper } from "./creative-developer/CreativeDeveloper";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="content" element={<ContentSpecialist />} />
        <Route path="developer" element={<CreativeDeveloper />} />
        <Route path="interaction-designer" element={<InteractionDesigner />} />
        <Route path="user-researcher" element={<UserResearcher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
