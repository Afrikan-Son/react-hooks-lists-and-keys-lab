import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {/* The div tag with the class name of "technologies" maps over the technologies 
        array and renders each technology in a span tag with a unique key. */} 
        {/* The map function iterates over the array and returns a new array with the span tags,
         each containing a technology from the technologies array.*/}

        {technologies.map((tech) => {

          return <span key={tech}>{tech}</span>;
        })}

      </div>
    </div>
  );
}

export default ProjectItem;
