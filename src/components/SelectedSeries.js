import React, { Component } from 'react';
import SelectedItem from "./SelectedItem";

class SelectedSeries extends Component {

    render() {
        return (
            <div className={"selectedSeriesPage"}>
                <ul>

                 {Object.keys(this.props.selectedObjects).length > 0 && Object.values(this.props.selectedObjects).map((item) => (
                    <SelectedItem
                        item ={item}
                        myJson={this.props.myJson}
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