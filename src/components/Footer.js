import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {

    render() {
        return (
            <footer>
                <nav className="footer__nav">
                    <div className="footer__nav-href"><Link to="/" >Main</Link></div>
                    <div className="footer__nav-href"><Link to="/SelectedSeries">Selected</Link></div>
                    <div className="footer__nav-href"><Link to="/">Blah Blah</Link></div>
                </nav>
            </footer>
        );
    }
}

export default Footer;