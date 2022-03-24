import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const styleComp = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "2em",
  };

  return (
    <div>
      <header className="App-header">
        <h1>Software Engineering Class SFSU</h1>
        <h2>Spring 2022</h2>
        <h2>Section 04</h2>
        <h2>Team 5</h2>
        <div style={styleComp}>
          <Link
            to="/rhoanna"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Rhoanna Jo Perez
          </Link>
          <Link
            to="/jia"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Jia Liang Li
          </Link>
          <Link 
            to='/kim' 
            style={{ 
                textDecoration: 'none', 
                color: 'white', 
                cursor: 'pointer' 
                }}
            >
            Seongjung Kim
        </Link>


          {/* Add a link to your component right here! */}
          <Link
            to="/chris"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Christopher Su
          </Link>
          <Link
            to="/nelson"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Nelson Pang
          </Link>
          <Link 
            to='/michael' 
            style={{ 
              textDecoration: 'none', 
              color: 'white', 
              cursor: 'pointer' }}
            >
              Michael Abolencia
          </Link>

        
        </div>
      </header>
    </div>
  );
};

export default Homepage;
