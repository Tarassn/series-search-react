import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import {setMinRate,getSeries,setDate,setRateSwitch} from "./actions/PageActions";
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
      let {page, selected, getSeries, setMinRate, setSelected, setDate, setRateSwitch} = this.props;
    return (
        <Router>
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" render={()=>
                            <Main
                                getSeries={getSeries}
                                searchField={page.searchField}
                                myJson={page.myJson}
                                minRateFilter={page.minRateFilter}
                                setMinRate={setMinRate}
                                selectedObjects={selected.selectedObjects}
                                setSelected={setSelected}
                                onChange={setDate}
                                date={page.date}
                                setRateSwitch={setRateSwitch}
                                rateSwitch={page.rateSwitch}
                                />
                    }/>
                    <Route path="/SeriesPage" component={()=>
                        <SeriesPage
                            myJson={page.myJson}
                            selectedObjects={selected.selectedObjects}
                            setSelected={setSelected}
                        />} />
                    <Route path="/SelectedSeries" component={() =>
                        <SelectedSeries
                            selectedObjects={selected.selectedObjects}
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
        setDate:(date) => dispatch(setDate(date)),
        setRateSwitch:(e) => dispatch(setRateSwitch(e)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);

