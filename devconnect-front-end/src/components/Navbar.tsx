
const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Dev Connect</a>
      <ul>
        <li>
            <a href='/Dashboard.tsx'>Dashboard</a>
        </li>
        <li>
            <a href='/Login.tsx'>Login</a>
        </li>
        <li>
            <a href='/Profile.tsx'>Profile</a>
        </li>
        <li>
            <a href='/Projects.tsx'>Projects</a>
        </li>
        <li>
            <a href='/Register.tsx'>Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;