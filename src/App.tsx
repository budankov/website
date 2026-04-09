import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppPage from "./pages/AppPage";
import HomePage from "./pages/HomePage";
import AppPrivacy from "./pages/AppPrivacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:projectId" element={<AppPage />} />
      <Route path="/:projectId/privacy" element={<AppPrivacy />} />
    </Routes>
  );
}

export default App;
