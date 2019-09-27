import React, { Component } from 'react';
import SeriesItem from "./SeriesItem";
import Calendar from 'react-calendar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { ThemeProvider } from '@material-ui/styles';
import Switch from '@material-ui/core/Switch';
import theme from "../theme";


class Main extends Component {

    render() {
        let {myJson, searchField, minRateFilter,
            setMinRate,getSeries,selectedObjects,
            setSelected, date, setRateSwitch,rateSwitch} = this.props;
        return (
            <div className="main">
                <div className="title-container">
                    <h2 className="title-container__title">Find your perfect series</h2>
                    <ul>
                        {myJson && myJson.map((serial) => {
                            if((!rateSwitch || (serial.show.rating.average !== null && serial.show.rating.average >= minRateFilter))
                                && (Date.parse(serial.show.premiered) - Date.parse(date)) <= 0 ) {
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
            <ThemeProvider theme={theme}>
                    <Input type="text" onChange={getSeries} value={searchField}
                    style={{
                        color:'#fff'
                    }}/>
                    <Select value={minRateFilter} onChange={setMinRate} name="country"
                    style={{
                        marginLeft:'20px',
                        color:'#fff'}}>
                        <MenuItem value="1">1+</MenuItem>
                        <MenuItem value="2">2+</MenuItem>
                        <MenuItem value="3">3+</MenuItem>
                        <MenuItem value="4">4+</MenuItem>
                        <MenuItem value="5">5+</MenuItem>
                        <MenuItem value="6">6+</MenuItem>
                        <MenuItem value="7">7+</MenuItem>
                        <MenuItem value="8">8+</MenuItem>
                        <MenuItem value="9">9+</MenuItem>
                    </Select>
                    <Switch checked={rateSwitch} onChange={(e) => {setRateSwitch(e)}}/>
                    <span> - Rate filter {rateSwitch?'enabled':'disabled'} </span>
                    <br/>
                    <p style={{'color':'white'}}>Premiered before:</p>
                    <Calendar onChange={this.props.onChange}
                              value={this.props.date}/>
            </ThemeProvider>
                </div>
            </div>
        );
    }
}

export default Main;