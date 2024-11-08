import React from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const [goToContact, setGoToContact] = React.useState(false);

  if (goToContact) {
    return <Navigate to="/About" />;
  }
  return (
   
    <div>
       <h1>ROUTING COMPONENT WITH BUTTON</h1>
       
      <h3>HOME PAGE</h3>
      <button onClick={() => {setGoToContact(true);}}>
         Render About
      </button>
       <br/>
      <button onClick={() => {setGoToContact(true);}}>
       Render Contact
      </button>
     
    </div>
  );
}

export default Home;