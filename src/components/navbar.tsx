import { NavLink } from "react-router-dom";
import './navbar.css';
import Image from '../assets/logo bambrush.jpg';

function Navbar(){
    return (
        <nav className="navbar">
            <div className='logos'>
                <img src={Image} alt="Bambrush Logo" className='logo' />
                <h1><span className='capB'>B</span>AMBRUSH</h1>
            </div>
            <div className="nav-container">
                <ul>
                    <li className="nav-item">
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
