import { useUser } from "@/api";
import Home from "@/features/home/home";
import { Navigate } from "react-router-dom";

const HomeRoute = () => {
  const { data } = useUser();
  if (!data) {
    return <Navigate to={"/signin"} />;
  }
  return <Home username={data?.username} />;
};

export default HomeRoute;
