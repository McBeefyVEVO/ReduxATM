import { HashRouter, Routes, Route } from "react-router-dom"
import Login from "./Login/Login" 
import Home from "./Home/Home"

export default function AppRoutes() {

    return (
        <HashRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<Home />} path="/Home" />
            </Routes>
        </HashRouter>
    )
}