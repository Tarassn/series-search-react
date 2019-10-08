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
    state={
      showCalendar:false
    };
    selectRef=React.createRef();

    toggleCalendar = () => {
        this.setState({
            showCalendar:!this.state.showCalendar
        })
    };

    render() {
        let {myJson, searchField, minRateFilter,
            setMinRate,getSeries,selectedObjects,
            setSelected, date, setRateSwitch,rateSwitch, onChangeDate} = this.props;

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
                    <Input data-test='component-input' type="text" onChange={getSeries} value={searchField}
                    style={{
                        color:'#fff'
                    }}/>
                    <Select value={minRateFilter} onChange={setMinRate} ref={this.selectRef} data-test='min-rate-select' name="country"
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
                    <Switch className='rateSwitch' checked={rateSwitch} onChange={(e) => {setRateSwitch(e)}}/>
                    <span> - Rate filter {rateSwitch?'enabled':'disabled'} </span>
                    <br/>
                    <span style={{'color':'white'}}>Premiered before:</span>

                <Input type="text"
                       onClick={this.toggleCalendar}
                       value={date.toLocaleDateString()}
                       id="calendarInput"
                       style={{
                           color:'#fff',
                           marginLeft:"10px"
                       }}/>
                {this.state.showCalendar &&
                <div style={{position:"relative"}}>
                    <Calendar onChange={onChangeDate}
                              value={date}/>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="40"
                         height="40"
                         fill="#ED4264"
                         style={{
                             position:"absolute",
                             left:'350px',
                             bottom:"208px",
                             cursor:'pointer',
                         }}
                         onClick={this.toggleCalendar}
                         viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                    </svg>
                </div> }

            </ThemeProvider>
                </div>
            </div>
        );
    }
}

export default Main;