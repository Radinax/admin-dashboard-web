import { useUser } from "@/api";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const result = useUser();
  const location = useLocation();

  if (result.status === "pending") {
    return <div>loading</div>;
  }

  if (!result.data) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname + location.search }}
      />
    );
  }

  return <Outlet />;
}
