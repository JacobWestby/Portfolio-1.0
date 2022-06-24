import CenteredCont from "./reusableComponents/CenteredCont"
import ProjectCard from "./reusableComponents/ProjectCard"

const ProjectsPage = ({ projects }) => {
    return (
        <div className="projects-background">
            <CenteredCont>
                <header className="projects__header-text">
                    <h2>My Projects</h2>
                </header>
                <main>
                    <div className="projectsPage__cont">
                        <div className="projectsPage__cont-cards">
                            <ProjectCard projects={projects} />
                        </div>
                    </div>
                </main>
            </CenteredCont>
        </div>
    )
}

export default ProjectsPage