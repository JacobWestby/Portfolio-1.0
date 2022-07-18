import { Link } from "react-router-dom";

const Projects = ({ projects }) => {

    // Get project name from click and set Link to project name

    return (
        <>
            <div className="projects">
                <h3>Projects</h3>
                <div className="projects__cont">
                    {projects.map((project) => (
                        <Link to={`/components/${project.name}project`} className="projects__cont-card" name={project.name} key={project.id} style={{ background: `url("${project.img}") no-repeat center/contain` }}></Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects