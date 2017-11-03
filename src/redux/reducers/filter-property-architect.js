import { CHANGE_SORT_PROPERTY_ARCHITECT, 
    CHANGE_SEARCH_PROPERTY_ARCHITECT, 
    CHANGE_SORT_PROPERTY_ARCHITECT_BUILDINGS, 
    CHANGE_SEARCH_PROPERTY_ARCHITECT_BUILDINGS, } from '../actions/index';

const initialState = {
    property:{
        search: '',
        sort: {
            value: 'name',
            direction: 'ASC'
        }
    },
    buildings:{
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
        case CHANGE_SORT_PROPERTY_ARCHITECT_BUILDINGS:
            return {
                ...state,
                buildings:{
                    ...state.buildings,
                    sort:{
                        value: 'name',
                        direction: action.payload,
                    }
                }
            }
        case CHANGE_SEARCH_PROPERTY_ARCHITECT_BUILDINGS:
            return {
                ...state,
                buildings: {
                  ...state.property,
                  search: action.payload,
                },
            }
        default: return state;
    }
}