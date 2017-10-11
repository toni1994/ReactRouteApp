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
    ]
}

export default function reducer(state = initialState , action){
    return state;
}