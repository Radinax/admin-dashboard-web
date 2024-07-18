import { Route, Routes } from "react-router-dom";
import SignupRoute from "./routes/signup";
import SigninRoute from "./routes/signin";

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupRoute />} />
      <Route path="/signin" element={<SigninRoute />} />
      <Route path="/" element={<div>Hello</div>} />
    </Routes>
  );
}
