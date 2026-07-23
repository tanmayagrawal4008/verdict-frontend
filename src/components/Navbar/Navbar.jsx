
import "./Navbar.css"
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <div className="nav__links"> 
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
                <Navlink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active-link" : ""}
                >
                    Home
                </Navlink>
            </div>
            <div className="nav__search">
                
            </div>
        </nav>
    );
}
export default Navbar;
