import { Link } from "react-router-dom"
import "../Home/Home.css"

export default function Home() {

    return (
        <>
        
            <h1 className="LogoTop">Maturita <p className="LogoTop_Bank">Bank</p></h1>
            <h3 className="LogoBot">Late stage capitalism ftw</h3>

            <ul className="Home_ul">
                <Link to={"/Withdraw"}>
                <li className="Home_li">Vybrat peníze</li>
                </Link>
                
                <Link to={"/Deposit"}>
                <li  className="Home_li">Vložit peníze</li>
                </Link>

                <Link to={"/Balance"}>
                <li  className="Home_li">Zůstatek</li>
                </Link>
                
                <Link to={"/"}>
                <li  className="Home_li">Odejít</li>
                </Link>
            </ul>
        
        </>
    )
}