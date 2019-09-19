import React, { Component } from 'react';
import './_scss/main.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state ={
      searchField:'',
  };
  componentDidMount() {
  }

  getSeries = (e) => {
      this.setState({searchField: e.target.value});
      return fetch(`http://api.tvmaze.com/search/shows?q=${this.state.searchField}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            return myJson.map((serial) => {
               console.log(serial)
            })
        });
  };
  render() {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
              <div className="main">
                  <div className="title-container"><h2 className="title-container__title">Find your perfect series</h2>
                  </div>
                  <div className="form-container">
                      <input type="text" onInput={this.getSeries}/>
                  </div>
              </div>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
