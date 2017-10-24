import { CHANGE_SORT_AREA_PROTOTYPER_FOLDER, CHANGE_SEARCH_AREA_PROTOTYPER_FOLDER } from '../actions/index';

const initialState = {
    folder:{
        search: '',
        sort: {
            value: 'name',
            direction: 'ASC'
        }
    }
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SORT_AREA_PROTOTYPER_FOLDER:
            return {
                ...state,
                folder:{
                    ...state.folder,
                    sort:{
                        value: 'name',
                        direction: action.payload,
                    }
                }
            }
        case CHANGE_SEARCH_AREA_PROTOTYPER_FOLDER:
            return {
                ...state,
                folder: {
                  ...state.folder,
                  search: action.payload,
                },
            }
        default: return state;
    }
}