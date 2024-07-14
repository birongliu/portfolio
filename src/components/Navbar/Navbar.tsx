import "./header.css";
export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo-container">
          <a className="logo" href="/">birongliu</a>
        </div>
        <div className="nav-container">
            <ul>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
    </nav>
  );
}
