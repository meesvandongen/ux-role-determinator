import React from "react";
import { Provider } from "react-redux";
import { InteractionDesigner } from "./roles/interaction-designer/InteractionDesigner";
import { store } from "./store";
import { UserResearcher } from "./roles/user-researcher/UserResearcher";
import { ContentSpecialist } from "./roles/content-specialist/ContentSpecialist";

function App() {
  return (
    <Provider store={store}>
      <div className="prose mx-auto py-10 px-2 md:px-0 space-y-32">
        <InteractionDesigner />
        <UserResearcher />
        <ContentSpecialist />
      </div>
    </Provider>
  );
}

export default App;
