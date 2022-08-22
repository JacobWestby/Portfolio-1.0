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
                <div className="more">
                    <p>React based projects can be found on <a href="https://github.com/JacobWestby?tab=repositories" target="_blank" rel="noreferrer">Github!</a></p>
                </div>
            </div>
        </>
    )
}

export default Projects