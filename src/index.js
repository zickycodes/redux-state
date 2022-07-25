import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from './app/source';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-6dlz7jte.us.auth0.com"
    clientId="jV4muApXcPqb9DxH3Jbzl6A81ztscNFk"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
);
