import React from 'react';
import {NavLink} from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <h1>
        React Todo App with Typescript
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor dolorum expedita id inventore nam quo ratione repellendus rerum suscipit.</p>

      <NavLink to="/">
        <button className="waves-effect waves-light btn">Back to Home</button>
      </NavLink>
    </div>
  );
};

export default AboutPage
