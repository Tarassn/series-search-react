import React, { Component } from 'react';
import SeriesItem from "./SeriesItem";

class Main extends Component {

    render() {
        let {myJson, searchField, minRateFilter,setMinRate,getSeries,selectedObjects,setSelected} = this.props;
        return (
            <div className="main">
                <div className="title-container"><h2 className="title-container__title">Find your perfect series</h2>
                    <ul>
                        {myJson && myJson.map((serial) => {
                            if(serial.show.rating.average !== null && serial.show.rating.average >= minRateFilter ) {
                                return <SeriesItem
                                    item={serial}
                                    key={serial.show.id}
                                    id={serial.show.id}
                                    name={serial.show.name}
                                    image={serial.show.image ? serial.show.image.medium : ""}
                                    selectedObjects={selectedObjects}
                                    setSelected={setSelected}
                                />
                            }
                            return null
                        })}
                    </ul>
                </div>
                <div className="form-container">
                    <input type="text" onChange={getSeries} value={searchField}/>
                    <select value={minRateFilter} onChange={setMinRate} name="country">
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                        <option value="6">6+</option>
                        <option value="7">7+</option>
                        <option value="8">8+</option>
                        <option value="9">9+</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Main;