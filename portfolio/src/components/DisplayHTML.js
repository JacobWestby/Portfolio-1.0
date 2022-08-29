import { useEffect, useState } from "react";

import rawHTML from "../projects/HTMLList";

const DisplayHTML = ({ projectName, projectID }) => {
    const [pageDisplay, setPageDisplay] = useState("");
    const [pageID, setPageID] = useState(Number(projectID));

    useEffect(() => {
        setPageDisplay(rawHTML[pageID].html);
    }, [])

    return (
        <div style={{ width: "100%", }}>
            <div dangerouslySetInnerHTML={{ __html: pageDisplay }}></div>
        </div>
    )
}

export default DisplayHTML