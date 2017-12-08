import { CHANGE_DISCOUNT } from '../actions/index';

const initialState = {
    flatDisCount: 10,
    disCountByCategory: true,
    product:[{
        CDTcodes: 100,
        officeFree: 230,
        disCountEnable: true,
        disCount: 5
    },
    {
        CDTcodes: 101,
        officeFree: 150,
        disCountEnable: true,
        disCount: 10
    },
    {
        CDTcodes: 102,
        officeFree: 432,
        disCountEnable: true,
        disCount: 20
    },
    {
        CDTcodes: 103,
        officeFree: 34,
        disCountEnable: true,
        disCount: 0
    },
    {
        CDTcodes: 104,
        officeFree: 233,
        disCountEnable: true,
        disCount: 15
    },
    {
        CDTcodes: 105,
        officeFree: 700,
        disCountEnable: true,
        disCount: 0
    },
    {
        CDTcodes: 106,
        officeFree: 950,
        disCountEnable: false,
        disCount: 25
    },
]
}

export default function reducer(state = initialState , action){
    switch (action.type) {
        case CHANGE_DISCOUNT:
            const idUpdate = action.payload.id;
            return {
                ...state,
                product: [
                    ...state.product.slice(0, idUpdate),
                    {   CDTcodes: 105,
                        officeFree: 700,
                        disCountEnable: true,
                        disCount: action.payload.disCount,},
                    ...state.product.slice(idUpdate + 1, state.product.length), 
                ]
            } 
            case "@@redux-form/CHANGE":
            if(action.meta.field === "AlldisCount")
            return {
                ...state,
                flatDisCount: action.payload,
                product: state.product.map((item,index) => { return {
                    CDTcodes: item.CDTcodes,
                    officeFree: item.officeFree,
                    disCountEnable: item.disCountEnable,
                    disCount: item.disCount
                }}),
            }
            else if(action.meta.field === "disCountCategory")
            return {
                ...state,
                disCountByCategory: !state.disCountByCategory
            }
            else if(action.meta.field.includes("CategorydisCount")){
                const code=Number(action.meta.field.slice(16));
                const index = state.product.findIndex((product) => product.CDTcodes === code);
            return {
                ...state,
                product: [
                  ...state.product.slice(0, index),
                  { CDTcodes: state.product[index].CDTcodes,
                    officeFree: state.product[index].officeFree,
                    disCountEnable: state.product[index].disCountEnable,
                    disCount: action.payload},
                  ...state.product.slice(index + 1, state.product.length),  
                ]
            }}
            else if(action.meta.field.includes("officeFree")){
                const code=Number(action.meta.field.slice(10));
                const index = state.product.findIndex((product) => product.CDTcodes === code);
            return {
                ...state,
                product: [
                  ...state.product.slice(0, index),
                  { CDTcodes: state.product[index].CDTcodes,
                    officeFree: action.payload,
                    disCountEnable: state.product[index].disCountEnable,
                    disCount: state.product[index].disCount},
                  ...state.product.slice(index + 1, state.product.length),  
                ]
            }}
            else if(action.meta.field.includes("disCountEnable")){
                const code=Number(action.meta.field.slice(14));
                const index = state.product.findIndex((product) => product.CDTcodes === code);
            return {
                ...state,
                product: [
                  ...state.product.slice(0, index),
                  { CDTcodes: state.product[index].CDTcodes,
                    officeFree: state.product[index].officeFree,
                    disCountEnable: !state.product[index].disCountEnable,
                    disCount: state.product[index].disCount},
                  ...state.product.slice(index + 1, state.product.length),  
                ]
            }}
            else return state
           
        default: return state
    }
}