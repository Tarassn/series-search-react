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
  };
  componentDidMount() {

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
        <Router>
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" render={()=>
                <Main
                    getSeries={this.getSeries}
                    searchField={this.state.searchField}
                    myJson={this.state.myJson}/>
                    }/>
                    <Route path="/SeriesPage" component={SeriesPage} />
                    <Route path="/SelectedSeries" component={SelectedSeries} />
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
