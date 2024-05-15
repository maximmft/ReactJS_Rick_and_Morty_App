import Facebook from "../assets/facebook_icon.png"
import './Footer.css'
import { useTheme } from "../contexts/theme";

function Footer () {

    const {theme} = useTheme()

    return (
        <div className={theme === "light" ? "footer-light" : "footer-dark"}>
        <img className="logo-facebook" src={Facebook}></img>
        </div>
    );
}

export default Footer