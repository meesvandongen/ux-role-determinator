import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { TopBar } from "./components/TopBar";
import nightwind from "nightwind/helper";
import { Helmet } from "react-helmet";
import { PersistGate } from "redux-persist/integration/react";
import { Roles } from "./roles/Roles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UxSpecialist } from "./roles/ux-specialist/UxSpecialist";
import { Overview } from "./roles/Overview";
import { UxConsultant } from "./roles/ux-consultant/UxConsultant";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Helmet>
            <script>{nightwind.init()}</script>
          </Helmet>
          <TopBar />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="roles" element={<Roles />}>
              <Route path="ux-specialist" element={<UxSpecialist />} />
              <Route path="ux-consultant" element={<UxConsultant />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
