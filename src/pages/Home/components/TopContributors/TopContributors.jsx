

import { Link } from "react-router-dom";
import "./TopContributors.css"
const topContributorUsers = [
    {
        rank: 1,
        username: "Benq",
        contributions: 3857
    },
    {
        rank: 2,
        username: "jiangly",
        contributions: 3812
    },
    {
        rank: 3,
        username: "tourist",
        contributions: 3530
    },
    {
        rank: 1,
        username: "Benq",
        contributions: 3857
    },
    {
        rank: 2,
        username: "jiangly",
        contributions: 3812
    },
    {
        rank: 3,
        username: "tourist",
        contributions: 3530
    },
    {
        rank: 1,
        username: "Benq",
        contributions: 3857
    },
    {
        rank: 2,
        username: "jiangly",
        contributions: 3812
    },
    {
        rank: 3,
        username: "tourist",
        contributions: 3530
    }
];

function TopContributors(){
    return (
        <div className="top__contributors">
            <div className="card__header">
                <h3>Top contributors</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>user</th>
                        <th>contributions</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            topContributorUsers.map((user) => (
                                <tr key = {user.rank}>
                                    <th>{user.rank}</th>
                                    <th>{user.username}</th>
                                    <th>{user.contributions}</th>
                                </tr>
                            ))
                        }
                </tbody>
            </table>

            <div className="card__footer">
                        <Link to = "/contibutions">veiw all</Link>
            </div>
        </div>
    );
}
export default TopContributors;
