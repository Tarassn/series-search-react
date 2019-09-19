import React, { Component } from 'react';

class SeriesItem extends Component {

    render() {
        return (
            <li>
                <span>{this.props.name}</span>
                <img src={this.props.image} alt={this.props.name}/>
            </li>
        );
    }
}

export default SeriesItem;