import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  return (
    <nav className="navbar">
      <Link to={'/'}>CV Manager</Link>

      <button onClick={() => i18n.changeLanguage('pl')}>Polish</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>

      <button className="btn create-new-cv-button" onClick={() => navigate('/creator')}>
        Create new CV
      </button>
    </nav>
  );
}

export default Navbar;
