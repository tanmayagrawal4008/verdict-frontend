import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo-image.png";
import "./Header.css";

function Header() {
  const { isAuthenticated, username, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    await logout();
    navigate("/");
  }
  return (
    <header className="header">
      <Link className="brand" to="/" aria-label="Codeforces Clone home">
        <img src={logo} alt="Codeforces Clone" />
        <span>
          VERDICT
          <br />
          <small></small>
        </span>
      </Link>
      <div className="auth-section">
        <span className="language-chip">English</span>
        {isAuthenticated ? (
          <div className="user-menu">
            <span>Hi, {username || "coder"}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/enter">Enter</Link>
            <span>·</span>
            <Link to="/register">Register</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
