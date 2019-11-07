import React from "react";

async function getUtcData() {
    const moment = (await import("moment")).default;

    return {
        utc: moment()
            .utc()
            .format(),
        offset: moment().utcOffset(),
    };
}

function ShowUtcFromFunc({ title }) {
    const [utcData, setUtcData] = React.useState({ utc: "", offset: "" });

    const getUtc = async () => {
        const { utc, offset } = await getUtcData();
        setUtcData({ utc, offset });
    };

    React.useEffect(() => {
        getUtc();
    }, []);

    return (
        <div className="App-header">
            <p>{title}</p>
            <div>{utcData.utc}</div>
            <div>{utcData.offset}</div>
        </div>
    );
}

export default ShowUtcFromFunc;
