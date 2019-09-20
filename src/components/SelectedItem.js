import React from 'react';

const SelectedItem = (props) => (
    <li>
        <div className="selectedItem">
        <h2>{props.name}</h2>
        <img src={props.img} alt={props.name}/>
        <button onClick={()=>{props.addToSelected(props.id)}}>Delete</button>
        </div>
    </li>
);
export default SelectedItem;