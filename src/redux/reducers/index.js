import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import { reducer as formReducer} from 'redux-form';

import AreaPrototyper from './area-prototyper';
import PropertyArchitect from './property-architect';


const rootReducer = combineReducers ({
    //routing: routerReducer,
    form: formReducer,
    AreaPrototyper,
    PropertyArchitect
    })

export default rootReducer;