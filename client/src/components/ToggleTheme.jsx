import "./toggle-theme.css";
import { useTheme } from '../contexts/theme';

function ToggleTheme() {

  const {theme, setTheme} = useTheme()

  const toggleTheme = () => {
    (theme === "light" ? setTheme("dark") : setTheme("light"))
  }
  {console.log(theme);}

  return (
    <label className="toggle">
      <input className="toggle-checkbox" type="checkbox" onClick={toggleTheme} />
      <div className="toggle-switch" />
    </label>
  );
}

export default ToggleTheme;