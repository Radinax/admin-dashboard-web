/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RouterProvider } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { createRouter } from "./providers/react-router.provider";
import { AppProvider } from "./providers/app.provider";

const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};

export default function App() {
  return (
    <>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </>
  );
}
