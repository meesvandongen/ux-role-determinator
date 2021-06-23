import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { UxSpecialist } from "./roles/ux-specialist/UxSpecialist";
import { TopBar } from "./components/TopBar";
import nightwind from "nightwind/helper";
import { Helmet } from "react-helmet";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Helmet>
          <script>{nightwind.init()}</script>
        </Helmet>
        <TopBar />
        <div className="prose mx-auto py-10 px-2 md:px-0 space-y-32">
          <UxSpecialist />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
