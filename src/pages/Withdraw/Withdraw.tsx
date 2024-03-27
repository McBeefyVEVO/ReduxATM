
import { Link } from "react-router-dom"
import "../Withdraw/Withdraw.css"

export default function Withdraw() {

    

    return (
        <>
        
            <h1 className="LogoTop">Maturita <p className="LogoTop_Bank">Bank</p></h1>
            <h3 className="LogoBot">Late stage capitalism ftw</h3>

            <Link to={"/Home"}>
            <p className="Withdraw_exit">Zpět</p>
            </Link>

            <form className="Withdraw_input_field">

                <input type="number" placeholder="Zadejte částku" />
                <input type="submit" value={"Vybrat"} className="Withdraw_input_submit"/>

            </form>

            
        
        </>
    )
}