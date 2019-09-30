import React, { Component } from 'react';

class SelectedItem extends Component {
        render() {
                let props = this.props;
                console.log(`${props.id}`);
                return (
                    <li>
                            <div className="selectedItem">
                                    <h2>{props.name}</h2>
                                    <img src={props.img} alt={props.name}/>
                            </div>
                    </li>
                )
        }
};
export default SelectedItem;