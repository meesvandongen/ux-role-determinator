import React from "react";
import { TopBar } from "./components/TopBar";
import { Roles } from "./roles/Roles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserResearcher } from "./roles/user-researcher/UserResearcher";
import { InteractionDesigner } from "./roles/interaction-designer/InteractionDesigner";
import { ContentSpecialist } from "./roles/content-specialist/ContentSpecialist";
import { CreativeDeveloper } from "./roles/creative-developer/CreativeDeveloper";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Roles />}>
          <Route path="content" element={<ContentSpecialist />} />
          <Route path="developer" element={<CreativeDeveloper />} />
          <Route
            path="interaction-designer"
            element={<InteractionDesigner />}
          />
          <Route path="user-researcher" element={<UserResearcher />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
