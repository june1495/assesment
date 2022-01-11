import './index.css';

const Navbar = () => (
  <header className="">
    <a href="/" className="logo">
      App
      <span>.</span>
    </a>
    <ul className="navigation">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="about">About</a>
      </li>
    </ul>
  </header>
);

export default Navbar;
