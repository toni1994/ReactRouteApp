import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import { reducer as formReducer} from 'redux-form';

import AreaPrototyper from './area-prototyper';
import PropertyArchitect from './property-architect';
import FiterAreaPrototyper from './filter-area-prototyper';
import FilterPropertyArchitect from './filter-property-architect';

const rootReducer = combineReducers ({
    //routing: routerReducer,
    form: formReducer,
    AreaPrototyper,
    PropertyArchitect,
    FiterAreaPrototyper,
    FilterPropertyArchitect,
    })

export default rootReducer;