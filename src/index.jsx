import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga";

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactGA.initialize("G-ZD7MVKGV4F", { debug: true });

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
