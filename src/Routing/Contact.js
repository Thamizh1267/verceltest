import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
       <h1>ROUTING COMPONENT"S WITH BUTTON</h1>
       <h3>CONTACT PAGE</h3>

      <button onClick={() => {navigate("/");}}>
       Render Home
      </button>
    </div>
  );
}

export default Contact;