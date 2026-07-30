import { Link } from "react-router-dom";

import "./BlogDownbar.css"
const no_of_votes = 100;

function BlogDownbar(){
    return (
        <div className="blog__downbar">
            <div className="votes">
                <button className = "upvote">up</button>
                <span className="number__of__votes">{no_of_votes}</span>
                <button className="downvote">down</button>
            </div> 
            <div className = "comment">
                <Link to = "/comments">comment</Link>
            </div>

        </div>
    );
}

export default BlogDownbar;
