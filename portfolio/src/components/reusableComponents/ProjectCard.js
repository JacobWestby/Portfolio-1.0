
const ProjectCard = ({ projects }) => {
    return (
        <>
            {
                projects.map((project) => (
                    <div className="projectCard">
                        <a href={project.adress}>
                            <img src={project.img} alt="Project" />
                            <p>{project.description}</p>
                        </a>
                    </div>
                ))
            }
        </>
    )
}

export default ProjectCard