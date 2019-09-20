import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SeriesItem extends Component {
    saveIdToSession = (e) => {
        e.preventDefault();
        const seriesId = e.currentTarget.attributes['data-id'].value;
        sessionStorage.setItem('seriesId', seriesId);
    };
    render() {
        return (
            <li data-id={this.props.id} onClick={this.saveIdToSession}>
                <Link to="/SeriesPage" className="routerLink">
                <span>{this.props.name}</span>
                <img src={this.props.image} alt={this.props.name}/>
                </Link>
            </li>
        );
    }
}

export default SeriesItem;