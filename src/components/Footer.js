import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer>
                <nav className="footer__nav">
                    <div className="footer__nav-href"><a href="a">Main</a></div>
                    <div className="footer__nav-href"><a href="a">Selected</a></div>
                    <div className="footer__nav-href"><a href="a">blah blah</a></div>
                </nav>
            </footer>
        );
    }
}

export default Footer;