import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { UxSpecialist } from "./roles/ux-specialist/UxSpecialist";

function App() {
  return (
    <Provider store={store}>
      <div className="prose mx-auto py-10 px-2 md:px-0 space-y-32">
        <UxSpecialist />
      </div>
    </Provider>
  );
}

export default App;
