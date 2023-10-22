import { GoogleOAuthProvider } from '@react-oauth/google';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<GoogleOAuthProvider clientId="684879206667-pp4nivu3bhkv6pacbrv8een0o19t5rn8.apps.googleusercontent.com">
    <App />
</GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
