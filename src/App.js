import React from "react";
import Wrapper from "./components/Wrapper";
import Avengers from "./avengers.json";
import Header from "./components/Header";
/* import "./App.css"; */

function App() {
  const avengerTeam = Avengers;
  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div id="avengerBody" className="col-12">
          <div className="row">
            {avengerTeam.map(Avenger => (
              <div
                key={Avenger.name + "-" + Avenger.id}
                id={Avenger.id}
                className="avengerCard"
              >
                <div className="img-container">
                  <img
                    alt={Avenger.name}
                    src={Avenger.image}
                    height="200px"
                    width="200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
