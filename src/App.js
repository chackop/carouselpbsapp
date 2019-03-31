import React, { Component } from "react";
import "./App.scss";
import Carouseltem from "./components/Carousel/Carouseltem";
import mockdata from "./data/mockdata";

const API = "https://pixabay.com/api/";
const APIKEY = "?key=9656065-a4094594c34f9ac14c7fc4c39";
const APIQUERY = "&q=beautiful+landscape&image_type=photo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: mockdata.properties,
      currProperty: mockdata.properties[0]
    };
  }

  componentDidMount() {
    fetch(API + APIKEY + APIQUERY)
      .then(response => response.json())
      .then(data => {
        let filteredData = data.hits.slice(10, 20).map((fdata, i) => {
          return {
            index: i,
            imageURL: fdata.webformatURL,
            user: fdata.user,
            likes: fdata.likes
          };
        });
        this.setState({ properties: filteredData });
      })
      .catch(e => console.log("fetch rejection", e));
  }

  nextItem = () => {
    const newIndex = this.state.currProperty.index + 1;
    this.setState({
      currProperty: this.state.properties[newIndex]
    });
  };

  prevItem = () => {
    const newIndex = this.state.currProperty.index - 1;
    this.setState({
      currProperty: this.state.properties[newIndex]
    });
  };

  render() {
    const { properties, currProperty } = this.state;
    return (
      <div className="App">
        <header>
          <section>
            <h1>Carousel</h1>
          </section>
        </header>

        <div className={`carousel-slider active-slide-${currProperty.index}`}>
          <div
            className="carousel-slide-wrapper"
            style={{
              transform: `translateX(-${currProperty.index *
                (100 / properties.length)}%)`
            }}
          >
            {properties.map(property => (
              <Carouseltem
                key={`carousel-item-key-${property.index}`}
                props={property}
              />
            ))}
          </div>
        </div>

        <div className="carousel-button-container">
          <button
            onClick={() => this.prevItem()}
            disabled={currProperty.index === 0}
            className="carousel-button"
          >
            Prev
          </button>
          <button
            onClick={() => this.nextItem()}
            disabled={currProperty.index === properties.length - 1}
            className="carousel-button"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
