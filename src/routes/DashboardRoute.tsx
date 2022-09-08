import Dashboard from "../pages/Dashboard/Dashboard";
import { useRoutes } from "react-router-dom";

const DashboardRoute = () => {
  let dashboardRoute = useRoutes([{ path: "/", element: <Dashboard /> }]);
  return dashboardRoute;
};

export default DashboardRoute;
