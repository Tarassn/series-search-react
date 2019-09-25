export const GET_SERIES="GET_SERIES";
export const SET_MIN_RATE = 'SET_MIN_RATE';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_DATE = 'SET_DATE';

export function setMinRate(e) {
    return {
        type: SET_MIN_RATE,
        payload: +e.target.value,
    }
}

export const getSeries = (e) => (dispatch) => {
    const searchField=e.target.value;
    return fetch(`http://api.tvmaze.com/search/shows?q=${searchField}`)
        .then(function(response) {
            return response.json();
        })
        .then((myJson) => {
            dispatch({
                type: SET_SEARCH,
                payload:searchField
            })
            dispatch({
                type: GET_SERIES,
                payload:myJson,
            });
        });
};

export const setDate = (date) => {
    return {
        type:SET_DATE,
        payload:date,
    }
};

