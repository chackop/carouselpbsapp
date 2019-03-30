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

  nextItem = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: mockdata.properties[newIndex]
    });
  };

  prevItem = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: mockdata.properties[newIndex]
    });
  };

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
        <div>
          <button
            onClick={() => this.prevItem()}
            disabled={property.index === 0}
          >
            Prev
          </button>
          <button
            onClick={() => this.nextItem()}
            disabled={property.index === mockdata.properties.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
