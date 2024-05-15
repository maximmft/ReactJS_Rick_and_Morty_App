import logo from '../assets/rick_logo.png';
import ToggleTheme from './ToggleTheme';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/theme';
import './Header.css';

function Header() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <div className={`header ${theme}`}>
            <img className="logo" src={logo} alt="Logo" />
            <ul>
                <li onClick={() => navigate("/")}>Accueil</li>
                <li onClick={() => navigate("/login")}>Connection</li>
            </ul>
            <ToggleTheme />
        </div>
    );
}

export default Header;
