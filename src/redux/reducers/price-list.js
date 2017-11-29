const initialState = {
    flatDisCount: 10,
    disCountByCategory: false,
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
        officeFree: 1000,
        disCountEnable: false,
        disCount: 25
    },
]
}

export default function reducer(state = initialState , action){
    switch (action.type) {
        default: return state
    }
}