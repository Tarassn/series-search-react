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
      selectedList:(JSON.parse(localStorage.getItem('selectedList')|| [])),
      selectedObjects:[],
  };
  componentDidMount() {
      this.fetchSelected()
  }

    saveInput = () => {
      const { searchField } = this.state;
      localStorage.setItem('searchField', searchField);
  };
  addToSelected = (id) => {
      let selectedObjects = [...this.state.selectedObjects];
      let selectedList = [...this.state.selectedList];
      if(selectedList.indexOf(id) === -1){
          selectedList = [...this.state.selectedList, id];
          selectedObjects.map((item)=>{
              console.log(item)
              console.log(id)
              if(item.id !== id){
                  selectedObjects = [...this.state.selectedObjects, item];
                  console.log(selectedObjects)

              }
          })
      }
      else if(selectedList.indexOf(id) > -1){
          selectedList.splice(selectedList.indexOf(id),1)
          selectedObjects.map((item, index)=>{
              if(item.id === id){
                  selectedObjects.splice(index,1)
              }
          })
      }
      localStorage.setItem('selectedList', JSON.stringify(selectedList));
      this.setState({selectedList,selectedObjects});
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
    fetchSelected = () => {
        let selectedList = [...this.state.selectedList];
        let selectedObjects = [...this.state.selectedObjects];
        { this.state.selectedList.map((id) => {
            return fetch(`http://api.tvmaze.com/shows/${id}`)
                .then(function (response) {
                    return response.json()
                })
                .then((myObj) => {
                    if(selectedList.map((e) => { return e.id; }).indexOf(myObj) === -1) {
                        selectedObjects.push(myObj)
                        // console.log(selectedObjects)
                    }
                });
        })}
        this.setState({selectedObjects});


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
                    <Route path="/SeriesPage" component={()=>
                        <SeriesPage
                            myJson={this.state.myJson}
                            selectedList={this.state.selectedList}
                            addToSelected={this.addToSelected}/>} />
                    <Route path="/SelectedSeries" component={() =>
                        <SelectedSeries
                            getSavedValueFromSession={this.getSavedValueFromSession}
                            selectedList={this.state.selectedList}
                            addToSelected={this.addToSelected}
                            selectedObjects={this.state.selectedObjects}
                            fetchSelected={this.fetchSelected}
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
