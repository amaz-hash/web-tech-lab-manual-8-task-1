import React from "react";
import ProfileCard from "./files/js/Profilecard";
import './files/styles/Card.css'

function App() {
  return (
    <div>
      <h1>Profile Cards</h1>
      <ProfileCard name="Fahad" age={30} occupation="Engineer" location="New York" />
      <ProfileCard name="Sara" age={25} occupation="Designer" location="San Francisco" />
      <ProfileCard name="Ali" age={28} occupation="Developer" location="London" />
    </div>
  );
}

export default App;
