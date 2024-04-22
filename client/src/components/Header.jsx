import { NavLink } from "react-router-dom";
import icon from "../assets/rick_logo.png";
import '../styles/header.css'

function Header() {
  return (
    <header>
      <img src={icon} alt="logo" />
      <nav>
        <NavLink>Accueil</NavLink>
        <a>Connexion</a>
      </nav>
    </header>
  );
}

export default Header;
