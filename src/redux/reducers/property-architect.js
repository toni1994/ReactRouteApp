import { OPEN_MODAL_NEW_PROPERTY, 
    CLOSE_MODAL_NEW_PROPERTY, 
    ADD_NEW_PROPERTY, 
    ADD_NEW_PROPERTY_BUILDINGS,
    SELECTED_PROPERTY } from '../actions/index';

const initialState = {
    properties: [{
        id: 0,
        name: "Hotel Lav",
        imagePath: "https://images.trvl-media.com/media/content/expus/graphics/launch/hotel1320x742.jpg",
        managerName: "Marko Matić",
    },
    {
        id: 1,
        name: "Helius Resolt",
        imagePath: "https://taj.tajhotels.com/content/dam/gateway/hotels/Beach-Road,Calicut/images/welcome/Calicut_Welcome-for-Web_4x3-01.jpg",
        managerName: "Abdul Al Rahim",
    }],
    buildings: [{
        id: 0,
        name: "Gold Tower",
        imagePath: "https://images.trvl-media.com/media/content/expus/graphics/launch/hotel1320x742.jpg",
        managerName: "Ante Antic",
        idProperties: 1
    },
    {   id: 1,
        name: "Poll Tower",
        imagePath: "http://api.helius.proficodev.com/public/uploads/building/436b8a0898b01484144240789.jpeg",
        managerName: "Ante Antic",
        idProperties: 1
    },
    {   id: 2,
        name: "Silver Tower",
        imagePath: "http://api.helius.proficodev.com/public/uploads/building/436b8a0898b01484144240789.jpeg",
        managerName: "Ante Antic",
        idProperties: 1
    }
    ],
    form: undefined,
    selectedProperty: undefined,
    selectedBuildings: undefined,
}

export default function reducer(state = initialState , action){
    switch(action.type){
    case OPEN_MODAL_NEW_PROPERTY:
        return {
            ...state,
            form: 'property',
        }
    case CLOSE_MODAL_NEW_PROPERTY:
    return {
            ...state,
            form: undefined,
    }
    case ADD_NEW_PROPERTY:
    return {
            ...state,
            properties :[...state.properties, 
                {
                    id: state.properties.length + 1,
                    name: action.payload.propertyName,
                    imagePath: "http://api.helius.proficodev.com/public/uploads/building/436b8a0898b01484144240789.jpeg",
                    managerName: action.payload.managerName,
                }],
                form: undefined,
    }
    case ADD_NEW_PROPERTY_BUILDINGS:
    return {
            ...state,
            buildings :[...state.buildings, 
                {
                    id: state.buildings.length + 1,
                    name: action.payload.BuildingName,
                    imagePath: "http://api.helius.proficodev.com/public/uploads/building/436b8a0898b01484144240789.jpeg",
                    managerName: action.payload.managerName,
                }],
                form: undefined,
    }  
    case SELECTED_PROPERTY:
    return {
            ...state,
            selectedProperty: action.payload,
    }

    default: 
    return state
    }
}