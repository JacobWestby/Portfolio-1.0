import { Link } from "react-router-dom";

import CenteredCont from "./reusableComponents/CenteredCont";
import ProjectCard from "./reusableComponents/ProjectCard";


const ProjectsPage = ({ projects, handleClick }) => {

    // when you click a project update state with project ID, pass state to displayHTML and compare project ID to HTML list ID
    // If match, display that page

    return (
        <div className="projects-background">
            <CenteredCont>
                <header className="projects__header-text">
                    <h2>My Projects</h2>
                </header>
                <main>
                    <div className="projectsPage__cont">
                        <div className="projectsPage__cont-cards">
                            <Link to="/components/displayhtml"><ProjectCard projects={projects} handleClick={handleClick} /></Link>
                        </div>
                    </div>
                </main>
            </CenteredCont>
        </div>
    )
}

export default ProjectsPage