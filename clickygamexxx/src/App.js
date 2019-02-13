import React, { Component } from "react";
import SchoolCard from "./components/SchoolCard";
import Wrapper from "./components/Wrapper";
import schools from "./schools.json";



function shuffleCards(schools) {

  for (let i = schools.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    [schools[i], schools[random]] = [schools[random], schools[i]];
  }
  return schools;
};


class App extends Component {

  state = {
    schools, 
    highscore: 0,
    score: 0,
    clicks: [],
    status: "Good luck!",
    id:""
  };


  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };


  handleClick = id => {
    
// console.log(id)
    let clickedCards = this.state.clicks;


    if(clickedCards.includes(id)) {
      
      this.setState({clicks: [], score: 0 , status: " You lose.  Play again." })
      this.handleShuffle();
      return;
    } else {
      clickedCards.push(id)


      if(clickedCards.length === 16) {
        this.setState({score: 16, status: "You win!!! Play again.", clicks: []});
        this.handleShuffle();
        return;
      }

      this.setState({ schools, clickedCards, score: clickedCards.length, status: " " });
     
      if (this.state.score === this.state.highscore) {
        this.setState({ highscore: clickedCards.length})
      }

    }

    this.handleShuffle();

  }


  handleShuffle =() => {
    let shuffleSchools = shuffleCards(schools);
    this.setState({schools: shuffleSchools});
  };


  render() {
    return (
      <Wrapper>
        <div className="container">
            <div className="row">
              <div className="col-md-3">
              <nav className="navbar fixed-top navbar-light bg-light">
              
                      {/* <a className="navbar-brand " href="/">
                          <img src="./images/NCAA_logo.svg.png" width="75" height="75" alt=""></img></a> */}
                          <div id="secTitle"> SEC Clicky Game</div>
                <div className = "col-md-3">
                <div id="yourScore">Your score: {this.state.score}</div>
                  </div>
                  <div className = "col-md-3">
                <div id="yourScore">High score: {this.state.highscore}</div>
                  </div>

                <div className="col-md-3">
                      <div id="winnerloser">{this.state.status}</div>
                </div>
               
             
                </nav>
                </div>
                </div>
          </div>
          {this.state.schools.map(schools => (
          <SchoolCard 
            id={schools.id}
            key={schools.id}
            handleIncrement={this.handleIncrement}
            handleClick = {this.handleClick}
            image={schools.image}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
