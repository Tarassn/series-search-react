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
                {this.props.selectedObjects.map((item) => (
                    <SelectedItem
                        id={item.id}
                        key={item.id}
                        item ={item}
                        name={item.name}
                        img={item.image.medium}
                        summary={item.summary}
                        addToSelected={this.props.addToSelected}
                    />
                ))}
                </ul>
            </div>
        );
    }
}

export default SelectedSeries;