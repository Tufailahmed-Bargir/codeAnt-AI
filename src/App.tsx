import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Repositories from "./components/repositories";
import Signin from "./components/signin";
import UnderConstruction from "./components/under";
// import Under from "./components/template";
// import Template from "./components/template";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex">
              <Sidebar />
              <Repositories />
            </div>
          }
        />

        <Route path="/signin" element={<Signin />} />

        <Route
          path="/development"
          element={
            <div className="flex">
              <Sidebar />
              <UnderConstruction />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;