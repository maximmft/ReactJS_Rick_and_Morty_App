import "../../styles/login-page.css";

function LoginPage() {
  return (
    <main id="login-page">
      <form>
        <label htmlFor="email">Votre email</label>
        <input type="text" id="email" />
        <label htmlFor="password">Votre mot de passe</label>
        <input type="password" id="password" />
        <button type="submit">Valider</button>
        <a to="/forgotten">Mot de passe oublié ?</a>
      </form>
    </main>
  );
}

export default LoginPage;
