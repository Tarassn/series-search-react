import React, { Component } from 'react';
import SelectedItem from "./SelectedItem";

class SelectedSeries extends Component {

    render() {
        return (
            <div className={"selectedSeriesPage"}>
                <ul>
                {Object.values(this.props.selectedObjects).map((item) => (
                    <SelectedItem
                        item ={item}
                        id={item.show.id}
                        key={item.show.id}
                        name={item.show.name}
                        img={item.show.image.medium}
                        summary={item.show.summary}
                        addToSelected={this.props.addToSelected}
                    />
                ))}
                </ul>
            </div>
        );
    }
}

export default SelectedSeries;