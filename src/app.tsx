import { Route, Routes } from "react-router-dom";
import SignupRoute from "./routes/signup";

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupRoute />} />
      <Route path="/" element={<div>Hello</div>} />
    </Routes>
  );
}
