import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <span>
                CV Manager
            </span>

            <button className='btn create-new-cv-button'>
                Create new CV
            </button>
        </nav>
    )
}

export default Navbar;