import React, { Component } from "react";
import "./App.scss";
import Carouseltem from "./components/Carousel/Carouseltem";
import mockdata from "./data/mockdata";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: mockdata.properties,
      property: mockdata.properties[0]
    };
  }

  render() {
    const { property } = this.state;
    return (
      <div className="App">
        <div className="page">
          <section>
            <h1>Carousel</h1>
          </section>

          <Carouseltem props={property} />
        </div>
      </div>
    );
  }
}

export default App;
