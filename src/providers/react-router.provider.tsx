import Home from "@/routes/home";
import NotFoundRoute from "@/routes/not-found";
import SigninRoute from "@/routes/signin";
import SignupRoute from "@/routes/signup";
import { QueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthContext } from "./auth.provider";
import { AppRoot } from "@/routes/root";
import { homeLoader } from "@/features/home/home.loader";

// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useContext(AuthContext);

  if (!user.isLoggedIn) {
    return <Navigate to={"/signin"} />;
  }
  return children;
};

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/signup",
      element: <SignupRoute />,
    },
    {
      path: "/signin",
      element: <SigninRoute />,
    },
    {
      path: "*",
      element: <NotFoundRoute />,
    },
    {
      path: "/app",
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Home />,
          loader: homeLoader(queryClient),
        },
      ],
    },
  ]);
