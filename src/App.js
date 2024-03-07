import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Landing, Error, Dashboard, Register } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
