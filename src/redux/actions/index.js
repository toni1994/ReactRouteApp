import { createAction } from './helpers';

export const OPEN_MODAL_NEW_PROPERTY = 'OPEN_MODAL_NEW_PROPERTY';
export const openModalNewProperty = createAction(OPEN_MODAL_NEW_PROPERTY);

export const CLOSE_MODAL_NEW_PROPERTY = 'CLOSE_MODAL_NEW_PROPERTY';
export const closeModalNewProperty = createAction(CLOSE_MODAL_NEW_PROPERTY);

export const ADD_NEW_PROPERTY = 'ADD_NEW_PROPERTY';
export const addNewProperty = createAction(ADD_NEW_PROPERTY);

export const UPDATE_PROPERTY = 'UPDATE_PROPERTY';
export const updateProperty = createAction(UPDATE_PROPERTY);

export const DELETE_PROPERTY = 'DELETE_PROPERTY';
export const deleteProperty = createAction(DELETE_PROPERTY);

export const ADD_NEW_PROPERTY_BUILDINGS = 'ADD_NEW_PROPERTY_BUILDINGS';
export const addNewBuildings = createAction(ADD_NEW_PROPERTY_BUILDINGS);

export const SELECTED_PROPERTY = 'SELECTED_PROPERTY';
export const selectedProperty = createAction(SELECTED_PROPERTY);


export const OPEN_MODAL_NEW_FOLDER = 'OPEN_MODAL_NEW_FOLDER';
export const openModalNewFolder = createAction(OPEN_MODAL_NEW_FOLDER);

export const CLOSE_MODAL_NEW_FOLDER = 'CLOSE_MODAL_NEW_FOLDER';
export const closeModalNewFolder = createAction(CLOSE_MODAL_NEW_FOLDER);

export const ADD_NEW_PROTOTYPER = 'ADD_NEW_PROTOTYPER';
export const addNewPrototyper = createAction(ADD_NEW_PROTOTYPER);



export const CHANGE_SORT_AREA_PROTOTYPER_FOLDER = 'CHANGE_SORT_AREA_PROTOTYPER_FOLDER';
export const changeSortAreaPrototyperFolder = createAction(CHANGE_SORT_AREA_PROTOTYPER_FOLDER);

export const CHANGE_SEARCH_AREA_PROTOTYPER_FOLDER = 'CHANGE_SEARCH_AREA_PROTOTYPER_FOLDER';
export const changeSerachAreaPrototyperFolder = createAction(CHANGE_SEARCH_AREA_PROTOTYPER_FOLDER);




export const CHANGE_SORT_PROPERTY_ARCHITECT = 'CHANGE_SORT_PROPERTY_ARCHITECT';
export const changeSortPropertyArchitect = createAction(CHANGE_SORT_PROPERTY_ARCHITECT);

export const CHANGE_SEARCH_PROPERTY_ARCHITECT = 'CHANGE_SEARCH_PROPERTY_ARCHITECT';
export const changeSearchPropertyArchitect = createAction(CHANGE_SEARCH_PROPERTY_ARCHITECT);

export const CHANGE_SORT_PROPERTY_ARCHITECT_BUILDINGS = 'CHANGE_SORT_PROPERTY_ARCHITECT_BUILDINGS';
export const changeSortPropertyArchitectBuildings = createAction(CHANGE_SORT_PROPERTY_ARCHITECT_BUILDINGS);

export const CHANGE_SEARCH_PROPERTY_ARCHITECT_BUILDINGS = 'CHANGE_SEARCH_PROPERTY_ARCHITECT_BUILDINGS';
export const changeSearchPropertyArchitectBuildings = createAction(CHANGE_SEARCH_PROPERTY_ARCHITECT_BUILDINGS);



export const DELETE_FOLDER = 'DELETE_FOLDER';
export const deleteFolder = createAction(DELETE_FOLDER);

export const UPDATE_FOLDER = 'UPDATE_FOLDER';
export const updateFolder = createAction(UPDATE_FOLDER);

export const SELECT_FOLDER = 'SELECT_FOLDER';
export const selectFolder = createAction(SELECT_FOLDER);





