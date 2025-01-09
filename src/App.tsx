import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Overview } from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import RecurringBills from "./pages/RecurringBills";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/budget" element={<Budgets />} />
            <Route path="/pot" element={<Pots />} />
            <Route path="/bill" element={<RecurringBills />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
