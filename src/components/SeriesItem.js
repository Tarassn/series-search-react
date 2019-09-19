import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SeriesItem extends Component {

    render() {
        return (
            <li>
                <Link to="/SeriesPage" className="routerLink">
                <span>{this.props.name}</span>
                <img src={this.props.image} alt={this.props.name}/>
                </Link>
            </li>
        );
    }
}

export default SeriesItem;