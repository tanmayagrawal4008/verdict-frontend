import { Link } from "react-router-dom";

import profilepic from "../../../../assets/profile-pic.png"
import "./UserCard.css"

const user_data = {
    rating : 2000,
    contribution : 150,
    user_name : "user_name"
}
function UserCard(){
    return (
        <div className="user__card">
            <h2 className="card__header">{user_data.user_name}</h2>
            <div className="card__content">
                <div className="left">
                <div className="profile__data">
                    <div><p>rating</p> <span>{user_data.rating}</span></div>
                    <div><p>contribution</p> <span>{user_data.contribution}</span></div>
                </div>


                    <ul className="links">
                        <li>
                            <Link to  = "/settings">settings</Link>
                        </li>
                        <li>
                            <Link to = "/blog">blog</Link>
                        </li>
                        <li >
                            <Link to = "/teams">teams</Link>
                        </li>
                        <li>
                            <Link to  = "/submissions">sumbissions</Link>

                        </li>
                        <li>
                            <Link to = "/favorites">favorites</Link>
                        </li>
                        <li >
                            <Link to  = "/problemsetting" >problemsetting</Link>
                            
                        </li>
                        <li>
                            <Link to  = "/groups">groups</Link>

                        </li>
                        <li>
                            <Link to = "/talks"> talks</Link>

                        </li>
                        <li>
                            <Link to = "/contests">contests</Link>
                        </li>

                    </ul>

            </div>

            <div className="right">
                <img src={profilepic} alt="profile_pic" />
                <Link className="profile__link" to = "/profile">{user_data.user_name}</Link>
            </div>
            </div>
            
        </div>

    );

}
export default UserCard;