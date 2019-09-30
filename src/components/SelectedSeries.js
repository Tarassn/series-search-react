import React, { Component } from 'react';
import SelectedItem from "./SelectedItem";

class SelectedSeries extends Component {

    render() {
        let {selectedObjects} = this.props;
        return (
            <div className={"selectedSeriesPage"}>
                <ul>
                 {Object.keys(selectedObjects).length > 0 && Object.values(selectedObjects).map((item) => (
                    <SelectedItem
                        item ={item}
                        id={item.show.id}
                        key={item.show.id}
                        name={item.show.name}
                        img={item.show.image.medium}
                        summary={item.show.summary}
                    />
                ))}
                </ul>
            </div>
        );
    }
}

export default SelectedSeries;