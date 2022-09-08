import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import DashboardRoute from "./routes/DashboardRoute";
import StatsRoute from "./routes/StatsRoute";
//routes import

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardRoute />
        <StatsRoute />
      </Router>
    </div>
  );
}

export default App;
