import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga";

const root = ReactDOM.createRoot(document.getElementById("root"));

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Initialize Analytics and get a reference to the service
// const analytics = getAnalytics(app);

ReactGA.initialize("G-ZD7MVKGV4F", { debug: true });

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
