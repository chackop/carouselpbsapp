import React, { Component } from "react";
import "./App.scss";
import Carouseltem from "./components/Carousel/Carouseltem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {
        index: 0,
        image: 'https://cdn.pixabay.com/user/2018/01/12/08-06-25-409_250x250.jpg',
        alttext: 'crab'
      }
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
