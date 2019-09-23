import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './_scss/main.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SeriesPage from "./components/SeriesPage";
import SelectedSeries from "./components/SelectedSeries";
import NotFound from "./components/NotFound";

class App extends Component {
  state ={
      searchField:(localStorage.getItem('searchField')|| ""),
      selectedObjects:(JSON.parse(localStorage.getItem('selectedObjects')|| {})),
      minRateFilter:1,
  };
  componentDidMount() {

  }
    saveInput = () => {
      const { searchField } = this.state;
      localStorage.setItem('searchField', searchField);
  };

  addToSelected = (id, obj) => {
      let selectedObjects = {...this.state.selectedObjects};
      if(!selectedObjects.hasOwnProperty(id)){
          selectedObjects[id]=obj;
      }
      else if(selectedObjects.hasOwnProperty(id)){
          delete selectedObjects[id];
      }
      localStorage.setItem('selectedObjects', JSON.stringify(selectedObjects));
      this.setState({selectedObjects})

  };

  getSavedValueFromSession = (id) => {
      if (!sessionStorage.getItem(id)) {
          return "";
      }
      return sessionStorage.getItem(id);
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
  changeRateFilter = (e) => {
      this.setState({ minRateFilter:e.target.value})
  };

  render() {
    return (
        <Router>
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" render={()=>
                <Main
                    getSeries={this.getSeries}
                    searchField={this.state.searchField}
                    myJson={this.state.myJson}
                    minRateFilter={this.state.minRateFilter}
                    changeRateFilter={this.changeRateFilter}/>
                    }/>
                    <Route path="/SeriesPage" component={()=>
                        <SeriesPage
                            myJson={this.state.myJson}
                            selectedObjects={this.state.selectedObjects}
                            addToSelected={this.addToSelected}
                        />} />
                    <Route path="/SelectedSeries" component={() =>
                        <SelectedSeries
                            getSavedValueFromSession={this.getSavedValueFromSession}
                            addToSelected={this.addToSelected}
                            selectedObjects={this.state.selectedObjects}
                        />}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
            <Footer/>
        </div>
        </Router>
    );
  }
}

export default App;
