import { OPEN_MODAL_NEW_FOLDER, CLOSE_MODAL_NEW_FOLDER, 
    ADD_NEW_PROTOTYPER, DELETE_FOLDER, UPDATE_FOLDER, SELECT_FOLDER } from '../actions/index';

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
    form: undefined,
    selectedFolder: undefined,
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
    case UPDATE_FOLDER: 
        const idUpdate = state.selectedFolder;
    return {
      ...state,
      folders: [
        ...state.folders.slice(0, idUpdate),
        {   id: idUpdate,
            name: action.payload.folderName},
        ...state.folders.slice(idUpdate + 1, state.folders.length),  
      ], form: undefined,
    };

    case SELECT_FOLDER:
    return {
            ...state,
            selectedFolder: action.payload,
    }
    case DELETE_FOLDER:
        const id = action.payload;
        const index = state.folders.findIndex(item => item.id === id);
        return {
          ...state,
          folders: [
            ...state.folders.slice(0, index),
            ...state.folders.slice(index + 1, state.folders.length),
          ],
        };
        default:
    return state;
}
}