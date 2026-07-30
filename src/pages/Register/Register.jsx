import { Link } from "react-router-dom";
import "./Register.css"

function Register(){
    return (
        <div className="Register">
            <div className="note">Fill in the form to register in Codeforces.
You can skip this step and login with your Gmail.</div>
            <div className="Register__card">
                <div className="card__heading"></div>
                <div className="card__inputs">
                    <div className="handle__input">
                        <span>Handle : </span><input type="text" />
                    </div>
                    <div clasName = "email__input">
                        <span>Email : </span><input type="text" />

                    </div>
                    <div className="password__input">
                        <span>password : </span><input type="text" />

                    </div>
                    <div className="confirm__password__input">
                        <span>confirm password : </span> <input type="text" />
                    </div>
                    <button>Register</button>
                </div>
                <div className="card__footer">
                    <Link to = "/gmail">user gmail</Link>
                </div>
            </div>
        </div>

    );

}

export default Register;
