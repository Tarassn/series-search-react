import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import {setMinRate,getSeries,} from "./actions/PageActions";
import {setSelected} from './actions/SelectedActions'
import './_scss/main.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SeriesPage from "./components/SeriesPage";
import SelectedSeries from "./components/SelectedSeries";
import NotFound from "./components/NotFound";

class App extends Component {

  render() {
    return (
        <Router>
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" render={()=>
                <Main
                    getSeries={this.props.getSeries}
                    searchField={this.props.page.searchField}
                    myJson={this.props.page.myJson}
                    minRateFilter={this.props.page.minRateFilter}
                    setMinRate={this.props.setMinRate}/>
                    }/>
                    <Route path="/SeriesPage" component={()=>
                        <SeriesPage
                            myJson={this.props.page.myJson}
                            selectedObjects={this.props.selected.selectedObjects}
                            setSelected={this.props.setSelected}
                        />} />
                    <Route path="/SelectedSeries" component={() =>
                        <SelectedSeries
                            selectedObjects={this.props.selected.selectedObjects}
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

const mapStateToProps = store => {
    return {
        selected: store.selected,
        page: store.page,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setMinRate: (e) => dispatch(setMinRate(e)),
        getSeries:(e) => dispatch(getSeries(e)),
        setSelected:(id,context,obj) => dispatch(setSelected(id,context, obj)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);

