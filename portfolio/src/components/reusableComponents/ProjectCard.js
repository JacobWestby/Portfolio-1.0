const ProjectCard = ({ projects, handleClick }) => {
    return (
        <>
            {
                projects.map((project) => (
                    <div className="projectCard" id={project.id} key={project.id} onClick={handleClick}>
                        <div>
                            <img src={project.img} alt="Project" />
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ProjectCard