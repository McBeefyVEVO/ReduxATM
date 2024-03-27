import { HashRouter, Routes, Route } from "react-router-dom"
import Login from "./Login/Login" 
import Home from "./Home/Home"
import Withdraw from "./Withdraw/Withdraw"
import Deposit from "./Deposit/Deposit"
import Balance from "./Balance/Balance"

export default function AppRoutes() {

    return (
        <HashRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<Home />} path="/Home" />
                <Route element={<Withdraw />} path="/Withdraw" />
                <Route element={<Deposit />} path="/Deposit" />
                <Route element={<Balance />} path="/Balance" />
            </Routes>
        </HashRouter>
    )
}