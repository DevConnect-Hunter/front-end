
const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Dev Connect</a>
      <ul>
        <li>
            <a href='./pages/Dashboard.tsx'>Dashboard</a>
        </li>
        <li>
            <a href='./pages/Login.tsx'>Login</a>
        </li>
        <li>
            <a href='./pages/Profile.tsx'>Profile</a>
        </li>
        <li>
            <a href='./pages/Projects.tsx'>Projects</a>
        </li>
        <li>
            <a href='./pages/Register.tsx'>Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;