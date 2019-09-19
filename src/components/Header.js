import React, { Component } from 'react';
import logo from '../_scss/img/rolling-stones.png';

class Header extends Component {

    render() {
        return (
                <header className="App-header">
                    <nav className="header__nav" id="headerNav">
                        <div className="navigation__buttons_href"><a href="a">Main</a></div>
                        <div className="navigation__buttons_href"><a href="a">Selected</a></div>
                        <div className="navigation__buttons_href"><a href="a">blah blah</a></div>
                    </nav>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
        );
    }
}

export default Header;