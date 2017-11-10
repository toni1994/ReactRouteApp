import { OPEN_MODAL_NEW_PROPERTY, 
    CLOSE_MODAL_NEW_PROPERTY, 
    ADD_NEW_PROPERTY, 
    ADD_NEW_PROPERTY_BUILDINGS,
    SELECTED_PROPERTY,
    DELETE_PROPERTY } from '../actions/index';

const initialState = {
    properties: [{
        id: 0,
        name: "Hotel Lav",
        imagePath: "https://images.trvl-media.com/media/content/expus/graphics/launch/hotel1320x742.jpg",
        managerName: "Marko Matić",
        address: "Beverly Hills 10",
        phone: "39406454"
    },
    {
        id: 1,
        name: "Helius Resolt",
        imagePath: "https://taj.tajhotels.com/content/dam/gateway/hotels/Beach-Road,Calicut/images/welcome/Calicut_Welcome-for-Web_4x3-01.jpg",
        managerName: "Abdul Al Rahim",
        address: "Vukovarska 40",
        phone: "767806454"
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
                    name: action.payload.name,
                    imagePath: "http://api.helius.proficodev.com/public/uploads/building/436b8a0898b01484144240789.jpeg",
                    managerName: action.payload.managerName,
                    address: action.payload.address,
                    phone: action.payload.phone,
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
    case DELETE_PROPERTY:
        const id = action.payload;
        const index = state.properties.findIndex(item => item.id === id);
        return {
          ...state,
          properties: [
            ...state.properties.slice(0, index),
            ...state.properties.slice(index + 1, state.properties.length),
          ],
        };
    default: 
    return state
    }
}