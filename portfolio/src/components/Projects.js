
const Projects = ({ projects }) => {
    
    return (
        <div className="projects">
            <h3>Projects</h3>
            <div className="projects__cont">
                {projects.map((project) => (
                    <div className="projects__cont-card" key={project.id} style={{ background: `url("${project.img}") no-repeat center/contain` }}></div>
                ))}
            </div>
        </div>
    )
}

export default Projects