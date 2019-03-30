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
    const { properties, property } = this.state;
    return (
      <div className="App">
        <header>
          <section>
            <h1>Carousel</h1>
          </section>
        </header>

        <div className="page">
          <div className={`carousel-slider active-slide-${property.index}`}>
            <div
              className="carousel-slide-wrapper"
              style={{
                transform: `translateX(-${property.index *
                  (100 / properties.length)}%)`
              }}
            >
              {properties.map((property) => (
                <Carouseltem props={property} />
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-button">
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
