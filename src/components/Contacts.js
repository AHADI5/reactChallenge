import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Whatsapp from "../images/whatsapp.svg";

export default function Contacts () {
    return (
        <div className="contacts">
            <img src={Facebook} alt="facebook"/>
            <img src={Instagram} alt="instagram"/>
            <img src={Whatsapp} alt="whatsaap"/>
        </div>
    )

}