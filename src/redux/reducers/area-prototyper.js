import { OPEN_MODAL_NEW_FOLDER, CLOSE_MODAL_NEW_FOLDER, ADD_NEW_PROTOTYPER } from '../actions/index';

const initialState = {
    folders: [{
        id: 0,
        name: "Bar",
        numProtoypes: 4
    },
    {
        id: 1,
        name: "Casino",
        numProtoypes: 2
    }],
    form: undefined
}

export default function reducer(state = initialState , action){
    switch(action.type){
        case OPEN_MODAL_NEW_FOLDER:
        return {
            ...state,
            form: 'folder',
        }
        case CLOSE_MODAL_NEW_FOLDER:
        return {
            ...state,
            form: undefined,
        }
        case ADD_NEW_PROTOTYPER:
        return {
                ...state,
                folders :[...state.folders, 
                    {
                        id: state.folders.length + 1,
                        name: action.payload.folderName,
                        numProtoypes: 0
                    }],
                    form: undefined,
        }
        default:
    return state;
}
}