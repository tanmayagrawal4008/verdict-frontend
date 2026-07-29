
import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <div className="nav__links"> 
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to = "/"
                    className = {({isActive}) => isActive ? "active__link" : ""}
                >
                    Home
                </NavLink>
            </div>
            <div className="nav__search">
                <input
                type="text"
                placeholder="">

                </input>
            </div>
        </nav>
    );
}
export default Navbar;
