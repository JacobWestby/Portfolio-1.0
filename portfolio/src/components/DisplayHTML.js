import { useState } from "react";
import rawHTML from "../projects/HTMLList";

const DisplayHTML = ({ id }) => {
    const [pageDisplay, setPageDisplay] = useState(rawHTML.genesis);
    const [pageID, setPageID] = useState(rawHTML.genesis.id);

    console.log(pageID);

    return (
        <div style={{ width: "100%", }}>
            <div dangerouslySetInnerHTML={{ __html: pageDisplay.html }}></div>
        </div>
    )
}

export default DisplayHTML