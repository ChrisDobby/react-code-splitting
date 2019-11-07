import React from "react";
import moment from "moment";

function ShowUtc({ title }) {
    return (
        <div className="App-header">
            <p>{title}</p>
            <div>
                {moment()
                    .utc()
                    .format()}
            </div>
            <div>{moment().utcOffset()}</div>
        </div>
    );
}

export default ShowUtc;
