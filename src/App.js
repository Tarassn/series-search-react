import React, { Component } from 'react';
import './_scss/main.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";
import SeriesItem from "./components/SeriesItem";

class App extends Component {
  state ={
      searchField:(localStorage.getItem('searchField')|| ""),
  };
  componentDidMount() {
      const searchField =  localStorage.getItem('searchField');
      this.setState({searchField})
  }
  saveInput = () => {
      const { searchField } = this.state;
      localStorage.setItem('searchField', searchField);
  };


  getSeries = (e) => {
      e.preventDefault();
      const searchField=e.target.value;
      return fetch(`http://api.tvmaze.com/search/shows?q=${searchField}`)
        .then(function(response) {
            return response.json();
        })
        .then((myJson) => {
            this.setState({searchField, myJson});
            this.saveInput()
        });
  };
  render() {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
              <div className="main">
                  <div className="title-container"><h2 className="title-container__title">Find your perfect series</h2>
                      <ul>
                          {this.state.myJson && this.state.myJson.map((serial) => (
                          <SeriesItem
                              name={serial.show.name}
                              image={serial.show.image ? serial.show.image.medium: "" }
                          />
                          ))}
                      </ul>
                  </div>
                  <div className="form-container">
                      <input type="text" onInput={this.getSeries} value={this.state.searchField}/>
                  </div>
              </div>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
