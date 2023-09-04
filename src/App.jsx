import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./pages/Layout";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" exact element={<Layout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
