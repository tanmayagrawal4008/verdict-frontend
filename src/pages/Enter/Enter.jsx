import "./Enter.css"
import { Link } from "react-router-dom";



function Enter(){
    return (
        <div className="enter">
            <div className="note">
                <p>Fill in the form to login into Codeforces.
                    You can use Gmail as an alternative way to enter.
                </p>                
            </div>
            <div className="enter__card">
                <div className="card__header">Login into Codeforces</div>
                <div className="email__input"><span>Email : </span><input type="email" /></div>
                <div className="password__input"><span>Password : </span> <input type="password" /></div>
                    
                <button>Login</button>
                <div className="card__footer">
                    <Link to = "/gmail">use gmail</Link>
                </div>
            </div>
        </div>
    );

}

export default Enter;
