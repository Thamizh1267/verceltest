import React from "react";
import { Navigate } from "react-router-dom";

function About() {
 const [goToContact, setGoToContact] = React.useState(false);

  if (goToContact) {
    return <Navigate to="/Contact" />;
  }

  return (
    <div>
       <h1>ROUTING COMPONENT"S WITH BUTTON</h1>
       <h3>ABOUT PAGE</h3>
      <button onClick={() => {setGoToContact(true);}}>
       Render Contact
      </button>    
    </div>
  );
}

export default About;