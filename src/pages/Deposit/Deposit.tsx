
import { Link } from "react-router-dom"
import "../Deposit/Deposit.css"

export default function Deposit() {

    

    return (
        <>
        
            <h1 className="LogoTop">Maturita <p className="LogoTop_Bank">Bank</p></h1>
            <h3 className="LogoBot">Late stage capitalism ftw</h3>

            <Link to={"/Home"}>
            <p className="Deposit_exit">Zpět</p>
            </Link>

            <form className="Deposit_input_field">

                <input type="number" placeholder="Zadejte částku" />
                <input type="submit" value={"Vložit"} className="Deposit_input_submit"/>

            </form>

            
        
        </>
    )
}