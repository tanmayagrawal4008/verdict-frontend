import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-image.png"
import language_english from "../../assets/language-english-image.png"
import language_russian from "../../assets/language-russian-image.png"
import "./Header.css"
function Header(){
    return (
            
            <div className="header">
                <div className="logo__section">
                   <img src={logo} alt="logo__emage" />
                </div>

                <div className="auth__section">
                    <div className="language">
                        <img src  = {language_english} alt  = "english"/>
                        <img src={language_russian} alt = "russian"/>


                    </div>
                    <div className="auth__links">
                        <Link to = "/enter">Enter</Link>
                        <span>|</span>
                        <Link to = "/register">Register</Link>

                    </div>


                    

                </div>

                        
            </div>
        
    )
}

export default Header;
