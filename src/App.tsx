import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/Register";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
