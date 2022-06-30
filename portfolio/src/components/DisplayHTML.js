import { useState } from "react";

import rawHTML from "../projects/HTMLList";

const DisplayHTML = ({ projectName, projectID }) => {
    const [pageDisplay, setPageDisplay] = useState("");


    // const display = (projectName) => {
    //     const project = Object.keys(rawHTML).find(name => name === projectName);
    //     // const project = rawHTML.find(name => name === projectName);
    //     console.log(project)
    //     setPageDisplay(rawHTML[0].project.html)
    //     // console.log(rawHTML.objectName.html);
    // };

    // display();
    // useEffect(() => {
    //     display()
    // }, []);

    return (
        <div style={{ width: "100%", }}>
            <div dangerouslySetInnerHTML={{ __html: rawHTML[projectID].html }}></div>
        </div>
    )
}

export default DisplayHTML