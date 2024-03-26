import "../Login/Login.css"
import { Link } from "react-router-dom";

export default function Login() {

    return (
    
        <>
        
            <h1 className="LogoTop">Maturita <p className="LogoTop_Bank">Bank</p></h1>
            <h3 className="LogoBot">Late stage capitalism ftw</h3>

            <Link to={"/Home"}>
            <p className="vstup">Vstoupit do systému</p>
            </Link>
        
        </>
    )
}