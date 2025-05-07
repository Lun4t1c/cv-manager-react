import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <span>CV Manager</span>

      <button className="btn create-new-cv-button" onClick={() => navigate('/creator')}>
        Create new CV
      </button>
    </nav>
  );
}

export default Navbar;
