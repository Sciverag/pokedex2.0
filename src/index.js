import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
    domain="dev-uuchrakcgc5v10wo.us.auth0.com"
    clientId="cB3WAupAfrFkRZAvYTgpXSS6L5Q02vdD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)