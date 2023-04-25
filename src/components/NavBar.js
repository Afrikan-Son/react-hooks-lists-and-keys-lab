import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return ( 
          <nav>
    {/* display an <a> tag for each link here */}
    {/*The links array is passed as a prop to the component, and it contains a list of section names for the webpage.
      The map function is used to iterate over the links array and return a new array of a tags, one for each link in the array. 
      The key prop is set to the value of the link variable, which ensures that each a tag has a unique identifier. 
      The href prop is set to #${link}, which creates a hash link that navigates to the corresponding section on the webpage when the link is clicked. 
      The text content of each a tag is also set to the value of the link variable, which displays the name of the section as the link text.
      The entire list of a tags is enclosed in parentheses to indicate that it is a single expression that should be returned from the map function.
      The resulting list of a tags is then rendered inside the nav element when the component is used. */}
            {links.map((link) => (
              <a key={link} href={`#${link}`}>
                
                {link}
              </a>
            ))}

              
          </nav>
  );
}

export default NavBar;
