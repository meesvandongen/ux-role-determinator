import "./index.scss";
import App from "./App";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { NhostReactProvider } from "@nhost/react";
import { nhost } from "./nhost/nhost-client";
import { BrowserRouter } from "react-router-dom";
import { NhostApolloProvider } from "@nhost/react-apollo";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider
        nhost={nhost}
        headers={{
          "x-hasura-role": "admin",
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NhostApolloProvider>
    </NhostReactProvider>
  </StrictMode>,
);
