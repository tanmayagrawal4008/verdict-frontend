
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar(){
    const { isAuthenticated } = useAuth();
    return <nav className="navbar"><div className="nav-links"><NavLink to="/" end>HOME</NavLink><NavLink to="/problems">PROBLEMS</NavLink>{isAuthenticated && <NavLink to="/my-submissions">MY SUBMISSIONS</NavLink>}{isAuthenticated && <NavLink to="/my-problems">MY PROBLEMS</NavLink>}</div>{isAuthenticated && <NavLink className="create-link" to="/create-problem">+ CREATE PROBLEM</NavLink>}</nav>;
}
export default Navbar;
