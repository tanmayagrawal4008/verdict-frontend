
import "./FindUser.css"
function FindUser(){
    return (
        <div className="find__user">
            <div className="card__header">find user</div>
            <div className="input">
                <p>handle : </p>
                <input type="text" />
            </div>
            <div className="find">
                <button>find</button>
            </div>
        </div>
    );

}

export default FindUser;
