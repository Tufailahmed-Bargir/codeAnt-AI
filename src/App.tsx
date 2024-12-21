import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Repositories from "./components/repositories";
import Signin from "./components/signin";

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
      </Routes>
    </Router>
  );
}

export default App;
