import React, { Component } from 'react';
import SelectedItem from "./SelectedItem";

class SelectedSeries extends Component {

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState) {

    }
    // fetchData = () => {
    //     let selectedObjects = [...this.state.selectedObjects];
    //     { this.props.selectedList.map((id) => {
    //         return fetch(`http://api.tvmaze.com/shows/${id}`)
    //             .then(function (response) {
    //                 return response.json()
    //             })
    //             .then(function (myObj) {
    //                 selectedObjects.push(myObj);
    //             });
    //     })}
    //     this.setState({selectedObjects});
    // };

    render() {
        let {getSavedValueFromSession} = this.props;
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