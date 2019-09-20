import React, { Component } from 'react';

class SeriesPage extends Component {

    render() {
        let {myJson, addToSelected, selectedList} = this.props;
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
                                        onClick={()=>{addToSelected(item.show.id)}}>
                                        {((selectedList.indexOf(item.show.id) === -1)?
                                            "Add to selected": "Delete selected")}</button>
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