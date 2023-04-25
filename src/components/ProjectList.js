import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {/*The projects array is passed as a prop to the component, and it contains a list of project objects,
         each with properties such as name, about, and technologies.
          The map function is used to iterate over the projects array and return a new array of ProjectItem components,
          one for each project in the array. The key prop is set to the id property of the project object,
           which ensures that each ProjectItem component has a unique identifier. 
           The name, about, and technologies properties of each project object are passed as props to the corresponding ProjectItem component.
          The resulting list of ProjectItem components is rendered inside the div with the id attribute set to "project-list".
        */}
            {projects.map((project) => {
              return (

                    <ProjectItem
                        key={project.id}
                        name={project.name}
                        about={project.about}
                        technologies={project.technologies}
                    />    

              );

            })}
        
        
        
      </div>
    </div>
  );
}

export default ProjectList;
