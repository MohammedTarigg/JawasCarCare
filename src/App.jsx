import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./pages/Layout";
import "./App.css";

function App() {
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
  return (
    <>
      <CssBaseline />
      <Layout />
    </>
  );
}

export default App;
