import { CHANGE_SORT_PROPERTY_ARCHITECT, CHANGE_SEARCH_PROPERTY_ARCHITECT } from '../actions/index';

const initialState = {
    property:{
        search: '',
        sort: {
            value: 'name',
            direction: 'ASC'
        }
    }
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SORT_PROPERTY_ARCHITECT:
            return {
                ...state,
                property:{
                    ...state.property,
                    sort:{
                        value: 'name',
                        direction: action.payload,
                    }
                }
            }
        case CHANGE_SEARCH_PROPERTY_ARCHITECT:
            return {
                ...state,
                property: {
                  ...state.property,
                  search: action.payload,
                },
            }
        default: return state;
    }
}