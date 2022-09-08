import Stats from "../pages/Stats/Stats";
import { useRoutes } from "react-router-dom";

const StatsRoute = () => {
  let statsRoute = useRoutes([{ path: "/stats", element: <Stats /> }]);
  return statsRoute;
};

export default StatsRoute;
