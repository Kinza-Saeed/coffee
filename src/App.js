import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import Menu from "./pages/Menu";
function App() {
    return (_jsx("div", { className: "bg-primary min-h-screen text-[#4b2e2e]", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactUs, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/signUp", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(Pricing, {}) }), _jsx(Route, { path: "/menu", element: _jsx(Menu, {}) })] }) }));
}
export default App;
