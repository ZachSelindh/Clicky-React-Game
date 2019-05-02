import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Avengers from "./avengers.json";
import Header from "./components/Header";
import Card from "./components/Card";

class App extends Component {
  state = {
    Avengers,
    clickedArray: [],
    currentScore: 0,
    highestScore: 0
  };

  clickButton = () => {
    console.log();
    this.setState({ currentScore: this.state.currentScore + 1 });
  };
  render() {
    return (
      <Wrapper>
        <Header
          currentScore={this.state.currentScore}
          highestScore={this.state.highestScore}
        />
        <div className="container">
          <div id="avengerBody" className="col-12">
            <div className="row">
              {this.state.Avengers.map(Avenger => (
                <Card
                  name={Avenger.name}
                  id={Avenger.id}
                  image={Avenger.image}
                  clickButton={this.clickButton}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
