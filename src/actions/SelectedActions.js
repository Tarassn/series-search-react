export const SET_SELECTED = 'SET_SELECTED';



export const setSelected = (id,context, obj) => {
    let selectedObjects = {...context.props.selectedObjects};
    if(!selectedObjects.hasOwnProperty(id)){
        selectedObjects[id]=obj;
    }
    else if(selectedObjects.hasOwnProperty(id)){
        delete selectedObjects[id];
    }
    localStorage.setItem('selectedObjects', JSON.stringify(selectedObjects));
    return {
        type: SET_SELECTED,
        payload: selectedObjects,
    }
};

