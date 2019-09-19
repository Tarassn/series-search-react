import React, { Component } from 'react';
import logo from '../_scss/img/rolling-stones.png';
import {Link} from "react-router-dom";

class Header extends Component {

    render() {
        return (
                <header className="App-header">
                    <nav className="header__nav" id="headerNav">
                        <div className="navigation__buttons_href"><Link to="/" >Main</Link></div>
                        <div className="navigation__buttons_href"><Link to="/SelectedSeries">Selected</Link></div>
                        <div className="navigation__buttons_href"><Link to="/">Blah Blah</Link></div>
                    </nav>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
        );
    }
}

export default Header;