
import { Link } from "react-router-dom"

import "./ContestCard.css"
function ContestCard (
    {
        title,
        days,
        registration
    }
){
    return (
        <div className="contest__card">
            <h1>Before contest</h1>

            <Link to  = "/contest">{title}</Link>
            
            <p className="days">{days}</p>


            <Link to  = "/contest/register">register now -</Link>
            <p className="registration">*{registration}</p>


        </div>
    )

}


export default ContestCard;
