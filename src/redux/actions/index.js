import { createAction } from './helpers';

export const OPEN_MODAL_NEW_PROPERTY = 'OPEN_MODAL_NEW_PROPERTY';
export const openModalNewProperty = createAction(OPEN_MODAL_NEW_PROPERTY);

export const CLOSE_MODAL_NEW_PROPERTY = 'CLOSE_MODAL_NEW_PROPERTY';
export const closeModalNewProperty = createAction(CLOSE_MODAL_NEW_PROPERTY);

export const ADD_NEW_PROPERTY = 'ADD_NEW_PROPERTY';
export const addNewProperty = createAction(ADD_NEW_PROPERTY);