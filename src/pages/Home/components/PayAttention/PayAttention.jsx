import ContestCard from "./ContestCard";

import "./PayAttention.css"

function PayAttention(){
    return (
        <div className="pay__attention">
            <div className="card__header">
                <span>-</span>
                <h2>Pay attention</h2>
            </div>
            <ContestCard

                title="Codeforces Round 1112 (Div. 1)"

                days="3 days"

                registration="has extra registration"

            />

            <ContestCard

                title="Codeforces Round 1112 (Div. 2)"

                days="3 days"

                registration="has extra registration"

            />



        </div>
    );

}

export default PayAttention;