
import { Link } from "react-router-dom"
import "../Balance/Balance.css"

export default function Balance() {

    

    return (
        <>
        
            <h1 className="LogoTop">Maturita <p className="LogoTop_Bank">Bank</p></h1>
            <h3 className="LogoBot">Late stage capitalism ftw</h3>

            <Link to={"/Home"}>
            <p className="Balance_exit">Zpět</p>
            </Link>

            <p className="Balance_YourBal">Váš zůstatek</p>
            <p className="Balance_Value">sadge</p>

            
        
        </>
    )
}