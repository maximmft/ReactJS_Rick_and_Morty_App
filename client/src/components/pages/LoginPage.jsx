import "./LoginPage.css";
import Background from "../../assets/background.jpg";
import Background3 from "../../assets/background3.jpg"
import { useTheme } from "../../contexts/theme";

function LoginPage() {

  const {theme} = useTheme();

  return (
    <div
      className="background-login"
      style={{backgroundImage: `url(${theme === "dark" ? Background : Background3})`}}
      >
      <h1 className="title-login">Connection</h1>
      <label>Email:</label>
      <input className={theme === "dark" ? "input-login-dark" : "input-login-light" }id="email" type="email" placeholder="rick.sanchez@vortex.com"></input>
      <label>Mot de passe:</label>
      <input className={theme === "dark" ? "input-login-dark" : "input-login-light" } id="password" type="password"></input>
      <button className={theme === "dark" ? "button-login-dark" : "button-login-light" }id="submit" type="submit">
        Se connecter
      </button>
    </div>
  );
}

export default LoginPage;
