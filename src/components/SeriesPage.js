import React, { Component } from 'react';

class SeriesPage extends Component {

    render() {
        let {myJson, setSelected, selectedObjects} = this.props;
        let seriesId = sessionStorage.getItem('seriesId');
        return (
            <div className={"mainSeriesPage"}>
                {!myJson && <p>Not found!</p>}
                {myJson && myJson.map((item) => {
                    if(item.show.id === +seriesId){
                        return <div key={item.show.id}>
                                    <h3>{item.show.name}</h3>
                                    <img src={item.show.image ? item.show.image.medium: "" }
                                         alt={item.show.name}/>
                                    <button
                                        onClick={()=>
                                        {setSelected(item.show.id,this, item,)}}>
                                        {selectedObjects.hasOwnProperty(item.show.id)?
                                        'Delete' : "Add"}</button>
                                    <p dangerouslySetInnerHTML={{ __html: item.show.summary }}></p>
                               </div>
                    }
                    return null
                })}
            </div>
        );
    }
}

export default SeriesPage;