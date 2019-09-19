import React, { Component } from 'react';
import SeriesItem from "./SeriesItem";

class Main extends Component {

    render() {
        let {myJson, searchField, getSeries} = this.props;
        return (
            <div className="main">
                <div className="title-container"><h2 className="title-container__title">Find your perfect series</h2>
                    <ul>
                        {myJson && myJson.map((serial) => (
                            <SeriesItem
                                id = {serial.show.id}
                                name={serial.show.name}
                                image={serial.show.image ? serial.show.image.medium: "" }
                            />
                        ))}
                    </ul>
                </div>
                <div className="form-container">
                    <input type="text" onInput={getSeries} value={searchField}/>
                </div>
            </div>
        );
    }
}

export default Main;