import { Route, Routes } from "react-router-dom";
import SignupRoute from "./routes/signup";
import SigninRoute from "./routes/signin";
import Navbar from "./components/navbar/navbar";
import Home from "./routes/home";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupRoute />} />
        <Route path="/signin" element={<SigninRoute />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
