import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Avengers from "./avengers.json";
import Header from "./components/Header";
import Card from "./components/Card";
import Backdrop from "./components/Backdrop";
import IntroModal from "./components/IntroModal";
import $ from "jquery";

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

function thanosSnap() {
  $(".avengerCard").each(function() {
    $(this).animate({ opacity: 0 }, randomNumberforSnap());
  });
  setInterval(function() {
    $("#avengerBody").fadeOut(1000);
  }, 4000);
}

function randomNumberforSnap() {
  let x = Math.floor(Math.random() * Math.floor(4000));
  return x;
}

class App extends Component {
  state = {
    Avengers,
    shuffledAvengers: [],
    clickedArray: [],
    currentScore: 0
  };

  componentDidMount() {
    this.setState({ shuffledAvengers: randomArray(Avengers) });
    $("#backdrop").fadeIn(2000);
    $("#intro-modal").fadeIn(2000);
  }

  clickBeginButton = () => {
    $("#backdrop").fadeOut(1500);
    $("#intro-modal").fadeOut(1500);
    $("#avengerBody").fadeIn(1500);
  };

  clickButton = name => {
    if (this.state.clickedArray.includes(name)) {
      // Sets localstorage with the new high score.
      if (this.state.currentScore > localStorage.getItem("highestScore")) {
        var newHighest = this.state.currentScore;
        localStorage.setItem("highestScore", newHighest);
      }
      this.setState({ currentScore: 0, clickedArray: [] });
      thanosSnap();
    } else {
      this.state.clickedArray.push(name);
      if (this.state.clickedArray.length === 12) {
        alert("You win! Click okay to play again.");
        this.setState({ clickedArray: [] });
      } else if (this.state.clickedArray.length < 12) {
        randomArray(Avengers).map(Avenger => (
          <Card
            key={Avenger.name + "-" + Avenger.id}
            name={Avenger.name}
            id={Avenger.id}
            image={Avenger.image}
            clickButton={this.clickButton.bind(this, Avenger.name)}
            hidden={this.state.hidden}
          />
        ));
      }
      this.setState({ currentScore: this.state.currentScore + 1 });
    }
  };

  render() {
    return (
      <Wrapper>
        <Backdrop />
        <IntroModal clickBeginButton={this.clickBeginButton} />
        <Header
          currentScore={this.state.currentScore}
          highestScore={this.state.highestScore}
        />
        <div id="avengerBody" className="col-12">
          <div className="row">
            {this.state.shuffledAvengers.map(Avenger => (
              <Card
                key={Avenger.name + "-" + Avenger.id}
                name={Avenger.name}
                id={Avenger.id}
                image={Avenger.image}
                clickButton={this.clickButton.bind(this, Avenger.name)}
                hidden={this.state.hidden}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
