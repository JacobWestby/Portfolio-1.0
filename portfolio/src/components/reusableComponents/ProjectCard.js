const ProjectCard = ({ projects, handleClick }) => {
    return (
        <>
            {
                projects.map((project) => (
                    <div className="projectCard" name={project.name} id={project.id} key={project.id} onClick={handleClick}>
                        <img className="projectImg" src={project.img} alt="Project" />
                        <p>{project.description}</p>
                    </div>
                ))
            }
        </>
    )
}

export default ProjectCard