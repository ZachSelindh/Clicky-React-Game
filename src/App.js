import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Avengers from "./avengers.json";
import Header from "./components/Header";
import Card from "./components/Card";

function randomArray(Avengers) {
  let i = Avengers.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = Avengers[i];
    Avengers[i] = Avengers[j];
    Avengers[j] = temp;
  }
  return Avengers;
}

class App extends Component {
  state = {
    Avengers,
    clickedArray: [],
    currentScore: 0,
    highestScore: 0
  };

  clickButton = name => {
    console.log(name);

    if (this.state.clickedArray.includes(name)) {
      alert("Duplicate!");
      this.setState({ currentScore: 0, clickedArray: [] });
      return;
    } else this.state.clickedArray.push(name);
    console.log(this.state.clickedArray);

    this.setState({ currentScore: this.state.currentScore + 1 });
    // Shuffles the pictures around.
    randomArray(this.state.Avengers).map(Avenger => (
      <Card
        key={Avenger.name + "-" + Avenger.id}
        name={Avenger.name}
        id={Avenger.id}
        image={Avenger.image}
        clickButton={this.clickButton.bind(this, Avenger.name)}
      />
    ));
  };

  render() {
    const shuffledAvengers = randomArray(this.state.Avengers);
    return (
      <Wrapper>
        <Header
          currentScore={this.state.currentScore}
          highestScore={this.state.highestScore}
        />
        <div className="container">
          <div id="avengerBody" className="col-12">
            <div className="row">
              {shuffledAvengers.map(Avenger => (
                <Card
                  key={Avenger.name + "-" + Avenger.id}
                  name={Avenger.name}
                  id={Avenger.id}
                  image={Avenger.image}
                  clickButton={this.clickButton.bind(this, Avenger.name)}
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
