

import { Link } from "react-router-dom";
import "./TopRated.css"
const topRatedUsers = [
    {
        rank: 1,
        username: "Benq",
        rating: 3857
    },
    {
        rank: 2,
        username: "jiangly",
        rating: 3812
    },
    {
        rank: 3,
        username: "tourist",
        rating: 3530
    },
    {
        rank: 1,
        username: "Benq",
        rating: 3857
    },
    {
        rank: 2,
        username: "jiangly",
        rating: 3812
    },
    {
        rank: 3,
        username: "tourist",
        rating: 3530
    },
    {
        rank: 1,
        username: "Benq",
        rating: 3857
    },
    {
        rank: 2,
        username: "jiangly",
        rating: 3812
    },
    {
        rank: 3,
        username: "tourist",
        rating: 3530
    }
];

function TopRated(){
    return (
        <div className="top__rated">
            <div className="card__header">
                <h3>Top Rated</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>user</th>
                        <th>rating</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            topRatedUsers.map((user) => (
                                <tr key = {user.rank}>
                                    <th>{user.rank}</th>
                                    <th>{user.username}</th>
                                    <th>{user.rating}</th>
                                </tr>
                            ))
                        }
                </tbody>
            </table>

            <div className="card__footer">
                        <Link to = "/ratings">veiw all</Link>
            </div>
        </div>
    );
}
export default TopRated;
