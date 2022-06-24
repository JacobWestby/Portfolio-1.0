import { useState } from "react";

import CenteredCont from "./reusableComponents/CenteredCont";
import ProjectCard from "./reusableComponents/ProjectCard";


const ProjectsPage = ({ projects }) => {
    const [projectID, setProjectID] = useState("");

    // when you click a project update state with project ID, pass state to displayHTML and compare project ID to HTML list ID
    // If match, display that page

    // Figure out where to render displayHTML and how to pass ID to it.

    const handleClick = (e) => {
        setProjectID(e.currentTarget.id);
        console.log(projectID)
    };
    return (
        <div className="projects-background">
            <CenteredCont>
                <header className="projects__header-text">
                    <h2>My Projects</h2>
                </header>
                <main>
                    <div className="projectsPage__cont">
                        <div className="projectsPage__cont-cards">
                            <Link to="/displayhtml"><ProjectCard projects={projects} handleClick={handleClick} /></Link>
                        </div>
                    </div>
                </main>
            </CenteredCont>
        </div>
    )
}

export default ProjectsPage