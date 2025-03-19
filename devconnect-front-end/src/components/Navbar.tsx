import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/Dashboard" className="site-title">Dev Connect</Link>
      <Link to="/Dashboard"><img src="/images/devconnect-logo.png"></img></Link>
      <ul>
        <li>
            <Link to='/Dashboard'>Dashboard</Link>
        </li>
        <li>
            <Link to='/Login'>Login</Link>
        </li>
        <li>
            <Link to='/Profile'>Profile</Link>
        </li>
        <li>
            <Link to='/Projects'>Projects</Link>
        </li>
        <li>
            <Link to='/Register'>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;