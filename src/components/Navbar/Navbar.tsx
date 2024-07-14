import { Link } from "react-router-dom";
import "./header.css";
export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo-container">
          <Link className="logo" to="/">birongliu</Link>
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
