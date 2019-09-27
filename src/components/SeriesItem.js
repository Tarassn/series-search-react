import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

class SeriesItem extends Component {
    saveIdToSession = (e) => {
        e.preventDefault();
        const seriesId = e.currentTarget.attributes['data-id'].value;
        sessionStorage.setItem('seriesId', seriesId);
    };
    render() {
        let{setSelected, selectedObjects, id, name, image, item} = this.props;
        return (
            <li data-id={id} onClick={this.saveIdToSession}>
                <Link to="/SeriesPage" className="routerLink">
                    <span>{name}</span>
                    <img src={image} alt={name}/>
                </Link>
                <Button
                    onClick={()=>{setSelected(id,this, item,)}}>
                    {selectedObjects.hasOwnProperty(id)?
                        'Delete' : "Add"}</Button>
            </li>
        );
    }
}

export default SeriesItem;