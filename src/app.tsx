import { Suspense } from "react";
import { Spinner } from "./components/ui";
import { Route, Routes } from "react-router-dom";
import LoginRoute from "./routes/signin";
import Register from "./routes/signup";
import HomeRoute from "./routes/home";
import Dashboard from "./providers/dashboard.provider";

/**
 *
 * username: admin
 * email: admin@admin.com
 * pass: Admin345678.
 */

export default function App() {
  return (
    <>
      <Suspense fallback={<Spinner size="xl" />}>
        <Routes>
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="" element={<HomeRoute />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
