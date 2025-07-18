// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import Menu from  "./pages/Menu";


function App() {
  return (
    <div className="bg-primary min-h-screen text-[#4b2e2e]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path ="/signUp" element={<SignUp />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}


export default App;
